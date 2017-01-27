const gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

gulp.task('lessify', () =>  {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
});


gulp.task('default', () => {
    livereload.listen();
    gulp.watch('./less/**', ['lessify'])
})
