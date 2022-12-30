const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');



gulp.task('taskPug', function() {
    return gulp.src('./src/pug/**/**')
        .pipe(pug())
        .pipe(gulp.dest('./dist/html'));
})

gulp.task('taskScss', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
})
    

gulp.task('taskFonts', function() {
    return gulp.src('./src/fonts/**/**')
        .pipe(gulp.dest('./dist/fonts'));
})

gulp.task('taskImgs', function() {
    return gulp.src('./src/imgs/**/**')
        .pipe(gulp.dest('./dist/imgs'));
})

gulp.task('watch', function() {
    gulp.watch('./src/pug/*.pug', gulp.series(['taskPug']));
    gulp.watch('./src/sass/*.scss', gulp.series(['taskScss']));
    gulp.watch('./src/fonts/**/**', gulp.series(['taskFonts']));
    gulp.watch('./src/imgs/**/**', gulp.series(['taskImgs']));
})

gulp.task('default', gulp.series(['taskPug', 'taskScss', 'taskFonts', 'taskImgs', 'watch']));

