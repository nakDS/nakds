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
    .pipe(
      postcss([
        cssImport(),
        mixins(),
        nested(),
        postcssPresetEnv(),
        autoprefixer()
      ])
    )
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(gulp.dest("./docs/css/"))
    .pipe(
      notify({
        message: "Your nakDS CSS is ready ♡"
      })
    );
}

function utils() {
  return gulp
    .src("./src/variables/core-utils.css")
    .pipe(
      postcss([
        cssImport(),
        mixins(),
        nested(),
        postcssPresetEnv(),
        autoprefixer()
      ])
    )
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
    .pipe(
      postcss([
        cssImport(),
        mixins(),
        nested(),
        postcssPresetEnv(),
        autoprefixer()
      ])
    )
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("./dist/css/components/"))
    .pipe(
      notify({
        message: "Your components are ready ♡"
      })
    );
}

function fonts() {
  return gulp
    .src("./assets/fonts/*.*")
    .pipe(gulp.dest("./dist/assets/fonts/"))
    .pipe(gulp.dest("./docs/assets/fonts/"));
}

function svg() {
  return gulp
    .src("./assets/svg/*.*")
    .pipe(gulp.dest("./dist/assets/svg/"))
    .pipe(gulp.dest("./docs/assets/svg/"));
}

function watch() {
  gulp.watch("./src/**/*.css", css);
}

function colorTokens() {
  return gulp
    .src("./src/tokens/tokens--color.css")
    .pipe(postcss([cssnano()]))
    .pipe(
      inject.beforeEach("--color", '<span class="nk-box" style="background:')
    )
    .pipe(replace(/--\S+\:/g, ""))
    .pipe(inject.afterEach(";", '"></span>'))
    .pipe(replace(":root{", '<div class="nk-section">'))
    .pipe(replace("}", "</div>"))
    .pipe(rename("tokens--color.html"))
    .pipe(gulp.dest("./docs/"))
    .pipe(
      notify({
        message: "Your COLOR TOKEN HTML is ready ♡ "
      })
    );
}

const build = gulp.series(
  css,
  utils,
  components,
  colorTokens,
  fonts,
  svg,
  watch
);

exports.css = css;
exports.utils = utils;
exports.components = components;
exports.fonts = fonts;
exports.svg = svg;
exports.colorTokens = colorTokens;
exports.watch = watch;
exports.default = build;
