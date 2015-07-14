# gunlinux-tpl
**Шаблон проекта для быстрого старта.**

## Старт проекта

* Установите `gulp` и `bower` глобально:

```bash
npm i -g gulp bower
```

* Склонируйте себе репозиторий и перейдите в папку проекта:

```
git clone https://github.com/gunlinux/gunlinux-tpl new-project && cd new-project
```

* Установите зависимости

```
npm install
```

* Запустите Gulp.js:

```
gulp
```

## Команды для запуска с Gulp.js

* Запуск Gulp с отслеживанием изменений:

```
gulp

// Или
gulp default
```

* Сборка в папку `build`:

```
gulp build
```


## Структура папок и файлов

```
├── _src/                              # Исходники
│   ├── img/                           # Папка изображений
│   ├── js/                            # Папка со скриптами
│   │   └── app.js                     # Главный скрипт
│   ├── css/                           # Папка со стилями postcss
│   └── tpl/                           # Папка с шаблонами Jade
│       ├── blocks/                    # Папка с подключаемыми блоками
│       ├── layouts/                   # Папка с шаблонами раскладки
│       │   └── default.jade           # Шаблон раскладки по умолчанию
│       └── pages/                     # Папка с генерируемыми страницами
├── build/                             # Сборка
│   ├── img/                           # Папка изображений
│   ├── js/                            # Папка скриптов
│   └── css/                           # Папка стилей
│   └── *.html                         # Страницы
├── .jscsrc                            # Конфигурация проверки JavaScript в JSCS
├── .jshintrc                          # Конфигурация проверки JavaScript в JSHint
├── .gitignore                         # Список исключённых файлов из Git
├── gulpfile.js                        # Файл для запуска Gulp.js
├── package.json                       # Список пакетов и прочей информации
└── readme.md                          # Документация шаблона
```

Описание для некоторых папок:
* `_src/` - папка с иходниками, из которой генерируюется `build/`.
* `build/` - сборка сайта, по умолчанию её может не быть и можно без страха и риска её удалить, т.к. она генерируется каждый раз заново, при сборке всё её содержимое удаляется, поэтому руками в неё класть ничего не нужно.
