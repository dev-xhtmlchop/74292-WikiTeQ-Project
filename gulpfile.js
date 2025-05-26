const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const sorting = require('postcss-sorting');
const autoprefixer = require('autoprefixer');
const minify = require('gulp-minify');
const wait = require('gulp-wait');
const postcssScss = require('postcss-scss');

const sortingConfig = {
  order: [
    "custom-properties",
    "dollar-variables",
    "declarations",
    "rules",
    "at-rules"
  ],
  "properties-order": "alphabetical",
  "unspecified-properties-position": "bottom"
};

function sortScss() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(postcss([sorting(sortingConfig)], { syntax: postcssScss }))
    .pipe(gulp.dest('src/scss/'));
}

function buildCss() {
  return gulp.src('src/scss/*.scss')
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

function compressJs() {
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(minify({
      ext: { min: '.min.js' },
      noSource: true,
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/js/'));
}

function watcher() {
  gulp.watch('src/scss/**/*.scss', gulp.series(sortScss, buildCss));
  gulp.watch('src/js/*.js', gulp.series(compressJs));
}

exports.sortScss = sortScss;
exports.buildCss = buildCss;
exports.compressJs = compressJs;
exports.watch = gulp.series(sortScss, buildCss, compressJs, watcher);
exports.default = gulp.series(sortScss, buildCss, compressJs);
