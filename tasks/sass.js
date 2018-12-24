module.exports = function(gulp, $, browserSync) {
    gulp.task('create-css', function() {
        let defaultNotification = function(err) {
            return {
                subtitle: err.plugin,
                message: err.message,
                sound: 'Funk',
                onLast: true,
            };
        };
        return gulp.src([
                './src/styles/**/*.sass',
                '!./src/styles/{**/\_*,**/\_*/**}'
            ])
            .pipe($.sourcemaps.init())
            .pipe($.sass().on('error', function(err) {
                $.util.log(err);
            }))
            .pipe($.sourcemaps.write(''))
            .pipe(gulp.dest('./dist/css'))
            .pipe(browserSync.stream())
    });
};