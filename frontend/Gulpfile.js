var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var livereload = require('gulp-livereload');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

var paths = {
	lessFiles: ['./src/public/less/**/*.less', '!./src/public/less/main.less'],
	mainLess: './src/public/less/main.less',
	cssDest: './src/public/css/',
	bowerJson: './bower.json',
	vendor: './src/public/vendor',
	index: './src/index.html',
	srcDir: './src',
	customFiles: ['./src/public/css/**/*.css', './src/public/js/**.js'],
	ignorePath: '/src'
}

gulp.task('dev', ['watch']);

gulp.task('watch', ['inject'], function() {
	livereload.listen();
	gulp.watch(paths.lessFiles, ['less']);
});

gulp.task('less', function() {
	return gulp.src(paths.mainLess)
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))
		.pipe(gulp.dest(paths.cssDest));
});

gulp.task('inject', ['less'], function() {
	var depOptions = {
		bowerJson: require(paths.bowerJson),
		directory: paths.vendor,
		ignorePath: paths.ignorePath
	};
	var injectOptions = {
		ignorePath: paths.ignorePath
	}
	var injectSrc = gulp.src(paths.customFiles, {read: false});

	return gulp.src(paths.index)
		.pipe(wiredep(depOptions))
		.pipe(inject(injectSrc, injectOptions))
		.pipe(gulp.dest(paths.srcDir));
});