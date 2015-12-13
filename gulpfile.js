var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');

var scriptsPath = 'javascript';
var destinationPath = 'build';

gulp.task('default', ['javascriptBundle', 'htmlReplace', 'style', 'partials'])

gulp.task('javascriptBundle', function() {
    return gulp.src([
    		'node_modules/angular/angular.js',
    		'node_modules/angular-route/angular-route.js',
    		path.join(scriptsPath,'/**/*.js')
    	])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest(destinationPath));
});

gulp.task('htmlReplace', function() {
  gulp.src('index.html')
    .pipe(htmlreplace({
        'js': 'bundle.min.js'
    }))
    .pipe(gulp.dest(destinationPath));
});

gulp.task('style', function() {
  	gulp.src('style.css')
    .pipe(gulp.dest(destinationPath));
});

gulp.task('partials', function() {
  	gulp.src('partials/*')
    .pipe(gulp.dest(destinationPath + '/partials'));
});