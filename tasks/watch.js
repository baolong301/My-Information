module.exports = function(gulp, $, browserSync) {
    gulp.task('watch', function() {
        gulp.watch('./src/styles/**/*.sass', ['create-css']);
        gulp.watch('./src/img/**/*.*', ['copy-img']);
        gulp.watch('./src/templates/**/*.pug', ['create-html']);
        gulp.watch('./src/scripts/**/*.js', ['create-js']);
        gulp.watch("./dist/**/*.*").on('change', browserSync.reload);
    });
};