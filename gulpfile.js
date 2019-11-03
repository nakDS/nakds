/*nakDS-core by @nabaroa*/

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const cssImport = require('postcss-import');
const customProperties = require('postcss-custom-properties');
const apply = require('postcss-apply');
const mixins = require('postcss-mixins');
const nested = require('postcss-nested');
const customMedia = require('postcss-custom-media');
const cssnano = require('cssnano');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const inject = require('gulp-inject-string');
const replace = require('gulp-string-replace');
const insert = require('gulp-insert');

function css() {
  return gulp
    .src("./src/nakDS.css")
    .pipe(postcss([cssImport(),postcssPresetEnv(),autoprefixer()]))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(postcss([cssnano()]))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(notify({
      message: 'Your nakDS CSS is ready ♡'
    }));
  }

function watch() {
  gulp.watch("./src/css/**/*.css", css);
}

const build = gulp.series(css, watch);

exports.css = css;
exports.watch = watch;
exports.default = build;
