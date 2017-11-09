const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('styles', function( ){

  return gulp
  .src('./app/stylus/main.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./app/**/*.styl', ['styles'])
});

gulp.task('default', ['styles', 'watch']);