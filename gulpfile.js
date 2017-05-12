var gulp = require('gulp')
var tslint = require('gulp-tslint')


gulp.task('default', ['lint']);

gulp.task('lint', function() {
  return gulp.src(['./source/ts/**/**.ts', './test/**/**.test.ts'])
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});
