import browserSync from 'browser-sync';
import gulp from 'gulp';
import { browsersync as config } from '../config';

const bs = browserSync.create();

bs.watch(config.options.server.baseDir + '/**').on('change', bs.reload);

gulp.task('browsersync', () => {
  bs.init(config.options);
});
