// configuration

var output = 'build';
var js = ['_src/js/*.js'];
var css = ['_src/css/*.css'];
var tpl = ['_src/tpl/'];
var images = ['_src/img/*'];

var gulp = require('gulp');

// utils
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

function log(error) {
    console.log(error.toString());
    this.emit('end');
}
var fs = require('fs');
function get_version() {
    var text = fs.readFileSync('./package.json', 'utf8');
    return JSON.parse(text.toString()).version;
};

var version = get_version();
console.log(version);

// css
var autoprefixerOptions = {browsers: ['> 1%', 'IE 7']};
processors = [
    require('postcss-nested'),
    require('autoprefixer-core')(autoprefixerOptions)
];

var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var csslint = require('gulp-csslint');
var minifyCss = require('gulp-minify-css');

// js
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
// tpl
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
// images
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('clean', function () {
    return del([output + '/!(components)*']);
});

gulp.task('styles', ['clean'], function () {
    return gulp.src(css)
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(postcss(processors)).on('error', log)
        .pipe(csslint()).on('error', log)
        .pipe(minifyCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(output + '/css'))
        .pipe(reload({stream:true}));
});

gulp.task('tpl', ['clean'], function () {
    nunjucksRender.nunjucks.configure(tpl, {watch: false});
    return gulp.src([tpl + 'pages/*.html'])
        .pipe(data({version: version}))
        .pipe(nunjucksRender(tpl, {watch: false})).on('error', log)
        .pipe(gulp.dest(output))
        .pipe(reload({stream:true}));
});

gulp.task('scripts', ['clean'], function () {
    return gulp.src(js)
        .pipe(jshint()).on('error', log)
        .pipe(jscs()).on('error', log)
        .pipe(sourcemaps.init())
        .pipe(uglify()).on('error', log)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(output + '/js'))
        .pipe(reload({stream:true}));
});

gulp.task('images', ['clean'], function () {
    return gulp.src(images)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(output + '/img'));
});

// Статический сервер
gulp.task('browser-sync', ['build'], function () {
    browserSync({
        server: {
            baseDir: 'build'
        }
    });
});

gulp.task('watch', function () {
    // Отслеживание файлов .css
    gulp.watch(css, ['styles', browserSync.reload]);
    // Отслеживание html шаблонов
    gulp.watch(tpl + '**/*.html', ['tpl', browserSync.reload]);
    // Отслеживание файлов .js
    gulp.watch(js, ['scripts', browserSync.reload]);
    // Отслеживание файлов изображений
    gulp.watch(images, ['images']);
    // Отслеживание всех файлов в папке build/, перезагрузка при изменении
    gulp.watch(output, browserSync.reload);
});

gulp.task('build', ['clean', 'styles', 'tpl', 'scripts', 'images']);
gulp.task('default', ['build', 'browser-sync', 'watch']);
