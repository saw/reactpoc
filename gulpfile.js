var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var uglify = require('gulp-uglify');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./clientapp.js');
  return b.bundle()
    .pipe(source('clientapp.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('compress', ['browserify'], function() {
	gulp.src('public/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./public/js/min'))
});

gulp.task('build', ['compress'], function() {
	console.log('build');
});

gulp.task('watch', function() {
	gulp.watch(['./*.js', 'views/*.jsx', 'modules/*.js', 'lib/*.jsx'], ['build']);
});