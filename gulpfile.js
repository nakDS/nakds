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
const prettier = require("gulp-prettier");
const del = require('del');

function css() {
  return gulp
    .src("./src/nakDS.css")
    .pipe(
      postcss([
        cssImport(),
        mixins(),
        nested(),
        postcssPresetEnv({
          autoprefixer: { grid: true },
          postcssCustomProperties: { preserve: false }
        })
      ])
    )
    .pipe(gulp.dest("./dist/css/"))
    .pipe(postcss([cssnano()]))
    .pipe(rename("nakDS.min.css"))
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
        postcssPresetEnv({
          autoprefixer: { grid: true },
          postcssCustomProperties: { preserve: false }
        })
      ])
    )
    .pipe(gulp.dest("./dest/css/"))
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(
      notify({
        message: "Your utils are ready ♡"
      })
    );
}

function tokens() {
  return gulp
    .src("./src/tokens/**.css")
    .pipe(
      postcss([
        cssImport(),
        mixins(),
        nested(),
        postcssPresetEnv({
          autoprefixer: { grid: true },
          postcssCustomProperties: { preserve: false }
        })
      ])
    )
    .pipe(gulp.dest("./dist/css/tokens"))
    .pipe(
      notify({
        message: "Your tokens are ready ♡"
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
        postcssPresetEnv({
          autoprefixer: { grid: true },
          postcssCustomProperties: { preserve: false }
        })
      ])
    )
    .pipe(gulp.dest("./dest/css/"))
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

function sassMixins() {
  return gulp
    .src("./dest/css/**.css")
    .pipe(inject.beforeEach(".nk-", "@mixin "))
    .pipe(replace("@mixin .nk-", "@mixin nk-"))
    .pipe(prettier())
    .pipe(gulp.dest("./dist/scss/mixins/"))
    .pipe(
      rename(function(path) {
        path.extname = ".scss";
      })
    )
    .pipe(gulp.dest("./dist/scss/mixins/"))
    .pipe(
      notify({
        message: "Your Sass mixin is ready ♡ "
      })
    );
}

function clean() {
  return del(["./dist/scss/mixins/*.css"]);
}

const build = gulp.series(
  css,
  utils,
  tokens,
  components,
  fonts,
  sassMixins,
  clean,
  svg
);

exports.css = css;
exports.utils = utils;
exports.tokens = tokens;
exports.components = components;
exports.fonts = fonts;
exports.sassMixins = sassMixins;
exports.svg = svg;
exports.watch = watch;
exports.clean = clean;
exports.default = build;
