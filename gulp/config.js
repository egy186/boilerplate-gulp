const dest = './dist';
const src = './src';

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
