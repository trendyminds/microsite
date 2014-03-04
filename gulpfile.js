var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

var paths = {
  styles: './_scss/**/*.scss',
  scripts: [
      'js/jquery.js',
      'js/**/*.js',
      '!js/app.js',
      '!js/shiv.js',
      '!js/respond.js',
      '!js/modernizr.js'
    ]
};

gulp.task('sass', function() {
  return gulp.src(paths.styles)
    .pipe(sass())
    .pipe(prefix())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat("app.js"))
    .pipe(gulp.dest('./js'));
});

gulp.task('watch', function () {
  gulp.watch(paths.styles, ['sass']);
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'watch']);