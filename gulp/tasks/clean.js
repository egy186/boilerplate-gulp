import del from 'del';
import gulp from 'gulp';
import { clean as config } from '../config';

gulp.task('clean', callback => {
  del(config.src, callback);
});
