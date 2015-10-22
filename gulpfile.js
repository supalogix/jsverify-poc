// gulpfile.js

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
   return gulp.src('test/**/*.spec.js')
      .pipe(mocha());
});

gulp.task('default', ['test']);
