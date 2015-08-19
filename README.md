# boilerplate-gulp

Boilerplate for web projects with gulp.

## npm run

```
Lifecycle scripts included in boilerplate-gulp:
  start
    gulp

available via `npm run-script`:
  build
    gulp build
  clean
    gulp clean
```

## gulp --tasks

```
├── build:css
├── build:html
├── build:js
├── build:static
├─┬ build
│ ├── build:css
│ ├── build:html
│ ├── build:js
│ └── build:static
├── clean
├─┬ default
│ ├── clean
│ ├── lint
│ └── build
├── lint:js
└─┬ lint
  └── lint:js
```
