import eslint from 'gulp-eslint';
import gulp from 'gulp';
import { lint as config } from '../config';

gulp.task('lint:js', () => {
  return gulp.src(config.js.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint', ['lint:js']);
