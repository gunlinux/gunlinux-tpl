# gunlinux-tpl

**My gulp template for fast fronend project start .**

## Installation

* Install `gulp`  global:

```bash
npm i -g gulp
```

* Clone project

```
git clone https://github.com/gunlinux/gunlinux-tpl new-project && cd new-project
```

* Install dependencies

```
npm install
```

* Launch Gulp.js:

```
gulp
```

## Gulp.js commands

* Launch Gulp watch:

```
gulp

// or
gulp default
```

* Build project in `build` directory:

```
gulp build
```


## Files and directories

```
├── _src/                              # Source
│   ├── img/                           # Images
│   ├── js/                            # Scripts
│   │   └── app.js                     # Main scripts
│   ├── css/                           # styles
│   └── tpl/                           # nunjucks templates folder (Almost jinja2) 
│       ├── blocks/                    # Bem blocks
│       ├── layouts/                   # Bem layouts
│       │   └── default.html           # Default layout
│       └── pages/                     # Bem pages
├── build/                             # Build
│   ├── img/                           # Images
│   ├── js/                            # Scripts
│   └── css/                           # Styles
│   └── *.html                         # Pages
├── .jscsrc                            # .JSCS config
├── .jshintrc                          # .JSHint config
├── .gitignore                         # .gitignore
├── gulpfile.js                        # Main gulpfile
├── package.json                       # Packages list and configs
├── bower.json                         # Bower info and dependencies
├── readme.md                          # Template readme
└── changelog.md                       # Template changelog

```

##Some directories info:
* `_src/` - source directory
* `build/` - don't added files by hands here, it's fully generated, except 
bower_components
