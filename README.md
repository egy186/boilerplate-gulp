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
```

## gulp --tasks

```
├── build:css
├── build:html
├── build:js
├─┬ build
│ ├── build:css
│ ├── build:html
│ └── build:js
├─┬ default
│ ├── lint
│ └── build
├── lint:js
└─┬ lint
  └── lint:js
```
