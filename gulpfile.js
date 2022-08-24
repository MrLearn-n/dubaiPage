const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');


const src  = 'src/',
    dist = 'dist',
    app = {
        src: {
            html: src + 'pug/index.pug',
            css: src + 'sass/*.scss',
            imgs: src + 'imgs',
            fonts: src + 'fonts',  
        },
        
        
        dist: {
            html: dist + '/html',
            css: dist + '/css',
            imgs: dist + '/imgs',
            fonts: dist + '/fonts',  
        }

    }


gulp.task('taskPug', function() {
    return gulp.src(app.src.html)
        .pipe(pug())
        .pipe(gulp.dest(app.dist.html));
})

gulp.task('taskScss', function() {
    return gulp.src(app.src.css)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(app.dist.css));
})
    