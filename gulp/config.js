const dest = './dist';
const src = './src';

export const build = {
  js: {
    dest: dest + '/js',
    src: src + '/js/app.js'
  }
};

export const lint = {
  js: {
    src: ['./**/*.js', '!./node_modules/**']
  }
};
