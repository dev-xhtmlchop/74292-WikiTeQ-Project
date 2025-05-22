const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
let sorting = require('postcss-sorting');
const minify = require('gulp-minify');
const cleanjs = require('gulp-clean');
const wait = require('gulp-wait');
const autoprefixer = require('autoprefixer');

function buildCss() {
  return gulp.src(['src/scss/*.scss'])
    .pipe(wait(100))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css/'))
    .pipe(cleanCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('assets/css/'));
}

function compress() {
  return gulp.src(['src/js/*.js'])
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/js/'))
    .pipe(cleanjs())
    .pipe(minify())
    .pipe(gulp.dest('assets/js/'));
}

function watcher() {
  gulp.watch('src/scss/*.scss', gulp.series(buildCss));
  gulp.watch('src/js/*.js', gulp.series(compress));
}

exports.compress = gulp.series(compress);
exports.watch = gulp.series(buildCss, compress, watcher);
exports.default = gulp.series(buildCss, compress);