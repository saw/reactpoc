var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var es6transpiler = require('gulp-es6-transpiler');

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
  //uglify barfs on es6
	// .pipe(uglify()).on('error', function() {
 //    console.error(arguments);
 //  })
	.pipe(gulp.dest('./public/js/min'))
});

gulp.task('build', ['compress'], function() {
	console.log('build');
});

gulp.task('watch', ['build'], function() {
	gulp.watch(['./*.js', 'views/*.jsx', 'modules/*.js', 'lib/*.jsx'], ['build']);
});



// gulp.task('default', ['watch']);