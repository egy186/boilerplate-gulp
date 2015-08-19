import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import gulp from 'gulp';
import jade from 'gulp-jade';
import less from 'gulp-less';
import merge from 'merge-stream';
import minify from 'gulp-minify-css';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import { build as config } from '../config';

gulp.task('build:css', () => {
  return gulp.src(config.css.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.css.dest));
});

gulp.task('build:html', () => {
  return gulp.src(config.html.src)
    .pipe(jade(config.html.options))
    .pipe(gulp.dest(config.html.dest));
});

gulp.task('build:js', () => {
  return merge(config.js.files.map(src => {
    const filename = src.slice(src.lastIndexOf('/') + 1);
    return browserify({ debug: true }).transform(babelify).require(src, { entry: true }).bundle()
      .pipe(source(filename))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.js.dest));
  }));
});

gulp.task('build:static', () => {
  return gulp.src(config.static.src)
    .pipe(gulp.dest(config.static.dest));
});

gulp.task('build', ['build:css', 'build:html', 'build:js', 'build:static']);
