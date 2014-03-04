var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

var paths = {
  styles: '_scss/**/*.scss',
  scripts: [
        'js/jquery.js',
        'js/**/*.js',
        '!js/shiv.js',
        '!js/respond.js',
        '!js/modernizr.js'
    ]
};

gulp.task('sass', function() {
  gulp.src(paths.styles)
    .pipe(sass())
    .pipe(prefix())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(concat("app.js"))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'))
});

gulp.task('watch', function () {
  gulp.watch(paths.styles, ['sass']);
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'watch']);