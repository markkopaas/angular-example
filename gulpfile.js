var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var eslint = require('gulp-eslint');

gulp.task('default', function() {
  // place code for your default task here
});


var destinationPath = 'build';


gulp.task('javascriptBundle', function() {
    return gulp.src(['src/**/*.js','!src/**/*.test.js'])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest(destinationPath));
});

gulp.task('htmlReplace', function() {
    return gulp.src('src/index.html')
    .pipe(htmlreplace({
        'js': 'bundle.min.js'
    }))
    .pipe(gulp.dest(destinationPath));
});

gulp.task('style', function() {
    return gulp.src('src/style.css')
    .pipe(gulp.dest(destinationPath));
});

gulp.task('templates', function() {
    return gulp.src('src/**/*.tpl.html')
    .pipe(gulp.dest(destinationPath));
});

gulp.task('default', gulp.series('javascriptBundle', 'htmlReplace', 'style', 'templates'));

gulp.task('lint', function () {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['**/*.js','!build/**','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});