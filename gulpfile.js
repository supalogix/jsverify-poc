// gulpfile.js
var babel = require('babel/register')
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
   return gulp.src('test/**/*.spec.js')
      .pipe(mocha({
            compilers: {
                js: babel
            }
        }));
});

gulp.task('default', ['test']);
