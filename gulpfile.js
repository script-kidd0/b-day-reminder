const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('src/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('.'));
});


gulp.task('watch', () => {
    gulp.watch(['src/*.scss'], gulp.series('sass'));
});