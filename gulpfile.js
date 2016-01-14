var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-concat');
var react = require('gulp-react');
var reactify = require('reactify');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();

var path = {
  JS: ['public/js/src/*.jsx', 'public/js/src/**/*.jsx'],
  WATCH_DEST: ['public/js/dist/app.min.js', 'index.html', 'public/css/styles.css'],
  MINIFIED_OUT: 'app.min.js',
  DEST_DIST: 'public/js/dist',
};

gulp.task('default', ['build'], function() {
});

// Transform the jsx into js.
gulp.task('build', function() {
  gulp.src(path.JS)
    .pipe(browserify({
      debug: true,
      transform: ['reactify'],
      extensions: ['.jsx']
    }))
    .on('prebundle', function(bundler) {
      // Make React available externally for dev tools
      bundler.require('react');
    })
    .pipe(react())
    .pipe(minify(path.MINIFIED_OUT))
    .pipe(uglify(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_DIST));
});

gulp.task('watch', function() {

  browserSync.init({
      server: {
          baseDir: "./"
      }
  });

  gulp.watch(path.JS, ['build']);
  gulp.watch(path.WATCH_DEST).on('change', browserSync.reload);
});
