const gulp = require("gulp");
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
}

function assets() {
  return gulp
    .src("./assets/**/*.*")
    .pipe(gulp.dest("./dist/assets/"))
    .pipe(gulp.dest("./docs/assets/"));
}

function watch() {
  gulp.watch("./src/html/**/*.html", docs);
  gulp.watch("./src/templates/*.html", docs);
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
  assets
  // sassMixins,
  // clean
);

exports.docs = docs;
exports.assets = assets;
exports.watch = watch;
exports.default = build;
