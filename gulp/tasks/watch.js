import gulp from 'gulp';
import { watch as config } from '../config';

gulp.task('watch', ['browsersync'], () => {
  gulp.watch(config.css, ['build:css']);
  gulp.watch(config.html, ['build:html']);
  gulp.watch(config.js, ['build:js']);
  gulp.watch(config.static, ['build:static']);
});
