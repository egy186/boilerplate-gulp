const dest = './dist';
const src = './src';

export const bower = {
  dest: dest + '/lib'
};

export const browsersync = {
  options: {
    open: false,
    server: {
      baseDir: dest
    }
  }
};

export const build = {
  css: {
    dest: dest + '/css',
    src: src + '/less/style.less'
  },
  html: {
    src: src + '/jade/index.jade',
    dest,
    options: {
      data: {}
    }
  },
  js: {
    dest: dest + '/js',
    files: [src + '/js/app.js']
  },
  static: {
    dest,
    src: src + '/static/**'
  }
};

export const clean = {
  src: dest
};

export const lint = {
  js: {
    src: ['./**/*.js', '!./node_modules/**']
  }
};

export const watch = {
  css: src + '/less/**',
  html: src + '/jade/**',
  js: src + '/js/**',
  static: src + '/static/**'
};
