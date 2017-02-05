const gulp = require('gulp');

// rake files from client to server
gulp.task('rake', function() {
	
	// js
	gulp.src('./client/dist/*')
  		.pipe(gulp.dest('./server/public'));

  	// index.html
  	gulp.src('./client/src/app/index.html')
  		.pipe(gulp.dest('./server/public'));

});


  