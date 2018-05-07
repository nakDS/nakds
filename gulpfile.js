/*nakDS-core by @nabaroa*/

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssimport = require('postcss-import'),
    customproperties = require('postcss-custom-properties'),
    apply = require('postcss-apply'),
    mixins = require('postcss-mixins'),
    nested = require('postcss-nested'),
    customMedia = require("postcss-custom-media")
    nano = require('gulp-cssnano'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    inject = require('gulp-inject-string'),
    replace = require('gulp-string-replace'),
    insert = require('gulp-insert');
// Core
gulp.task('css', function() {
    var processors = [
        cssimport,
        autoprefixer,
        customproperties,
        apply,
        mixins,
        nested,
        customMedia
    ];
    var configNano = {
        autoprefixer: {
            browsers: 'last 2 versions'
        },
        discardComments: {
            removeAll: true
        },
        safe: true
    };
    return gulp.src('./src/**/*.css')
        .pipe(postcss(processors))
        .pipe(nano(configNano))
        .pipe(gulp.dest('./dist/'))
        .pipe(notify({
            message: 'Your nakDS-core CSS is ready ♡'
        }));
});

// Watch
gulp.task('watch', function() {
    gulp.watch('./src/**/*.css', ['css']);


});

// Default
gulp.task('default', ['css', 'watch']);
