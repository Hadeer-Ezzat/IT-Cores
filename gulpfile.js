'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

// gulp.task('cssmin', function () {
//     gulp.src('./css/dist/**/*.css')
//         .pipe(cssmin())
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(gulp.dest('./css/dist'));
// });

// ---------------------------------------------- Gulp Tasks
gulp.task('sass', function () {
    return gulp.src('./src/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/css'))
});
