const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const cssImport = require("postcss-import");
const customProperties = require("postcss-custom-properties");
const apply = require("postcss-apply");
const mixins = require("postcss-mixins");
const nested = require("postcss-nested");
const customMedia = require("postcss-custom-media");
const cssnano = require("cssnano");
const notify = require("gulp-notify");
const rename = require("gulp-rename");
const inject = require("gulp-inject-string");
const replace = require("gulp-string-replace");
const insert = require("gulp-insert");

function css() {
  return gulp
    .src("./src/nakDS.css")
    .pipe(postcss([cssImport(), mixins(), nested(), postcssPresetEnv(), autoprefixer()]))
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(
      notify({
        message: "Your nakDS CSS is ready ♡"
      })
    );
}

function utils() {
  return gulp
    .src("./src/variables/core-utils.css")
    .pipe(postcss([cssImport(), mixins(), nested(), postcssPresetEnv(), autoprefixer()]))
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(
      notify({
        message: "Your utils are ready ♡"
      })
    );
}

function components() {
  return gulp
    .src("./src/components/**.css")
    .pipe(postcss([cssImport(), mixins(), nested(), postcssPresetEnv(), autoprefixer()]))
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("./dist/css/components/"))
    .pipe(
      notify({
        message: "Your components are ready ♡"
      })
    );
}

function fonts() {
  return gulp.src("./assets/fonts/*.*").pipe(gulp.dest("./dist/assets/fonts/"));
}

function svg() {
  return gulp.src("./assets/svg/*.*").pipe(gulp.dest("./dist/assets/svg/"));
}

function watch() {
  gulp.watch("./src/**/*.css", css);
}

const build = gulp.series(css, utils, components, fonts, svg, watch);

exports.css = css;
exports.utils = utils;
exports.components = components;
exports.fonts = fonts;
exports.svg = svg;
exports.watch = watch;
exports.default = build;
