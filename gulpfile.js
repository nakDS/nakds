const gulp = require("gulp");
const postcss = require("gulp-postcss");
const postcssPresetEnv = require("postcss-preset-env");
const cssImport = require("postcss-import");
const mixins = require("postcss-mixins");
const cssnano = require("cssnano");
const notify = require("gulp-notify");
const rename = require("gulp-rename");
const fileinclude = require("gulp-file-include");

function docs() {
  return gulp
    .src("./src/html/**/index.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./docs/"))
    .pipe(
      notify({
        message: "Your docs are ready ♡",
      })
    );
}

function css() {
  return gulp
    .src("./src/css/**/*.css")
    .pipe(
      postcss([
        cssImport(),
        mixins(),
        postcssPresetEnv({
          autoprefixer: { grid: true },
          features: {
            "nesting-rules": true,
          },
        }),
      ])
    )
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(
      notify({
        message: "Your nakDS CSS is ready ♡",
      })
    );
}

function cssMin() {
  return gulp
    .src("./dist/css/nakDS.css")
    .pipe(rename("nakDS.min.css"))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(gulp.dest("./docs/css/"));
}

function assets() {
  return gulp
    .src("./assets/**/*.*")
    .pipe(gulp.dest("./dist/assets/"))
    .pipe(gulp.dest("./docs/assets/"));
}

function watch() {
  gulp.watch("./src/css/**/*.css", css);
}
// function watch() {
//   gulp.watch("./src/html/**/*.html", docs);
// }

// function sassMixins() {
//   return gulp
//     .src("./dest/css/**.css")
//     .pipe(replace("❤.nk-", "@mixin nk-"))
//     .pipe(prettier())
//     .pipe(gulp.dest("./dist/scss/mixins/"))
//     .pipe(
//       rename(function(path) {
//         path.extname = ".scss";
//       })
//     )
//     .pipe(gulp.dest("./dist/scss/mixins/"))
//     .pipe(
//       notify({
//         message: "Your Sass mixin is ready ♡ "
//       })
//     );
// }

// function clean() {
//   return del(["./dist/scss/mixins/*.css"]);
// }

const build = gulp.series(
  docs,
  css,
  cssMin,
  assets
  // sassMixins,
  // clean
);

exports.docs = docs;
exports.css = css;
exports.cssMin = cssMin;
exports.assets = assets;
exports.watch = watch;
exports.default = build;
