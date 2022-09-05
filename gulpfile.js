const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');



gulp.task('taskPug', function() {
    return gulp.src('src/pug/index.pug')
        .pipe(pug())
        .pipe(gulp.src('src/pug/index.html'));
})

gulp.task('taskScss', function() {
    return gulp.src('src/sass/media.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('style/*.css'));
})
    