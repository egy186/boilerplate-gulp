import bower from 'bower';
import gulp from 'gulp';
import mainBowerFiles from 'main-bower-files';
import { bower as config } from '../config';

gulp.task('bower:install', callback => {
  bower.commands.install().on('end', () => {
    callback();
  }).on('error', err => {
    callback(err);
  });
});

gulp.task('bower', ['bower:install'], () => {
  return gulp.src(mainBowerFiles(), { base: 'bower_components' })
    .pipe(gulp.dest(config.dest));
});
