var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var Q = require('q');

var paths = {
	jsFiles: ['*.js', 'server/**/*.js', '!./server/public/app/**/*.js', '!./server/public/vendor/**/*.js'],
	bowerFile: './bower.json',
	vendor: './server/public/vendor',
	ignorePath: '../public',
	ignorePath2: '/server/public/',
	customFiles: ['./server/public/css/**/*.css', './server/public/js/**/*.js'],
	layout: './server/includes/layout.jade',
	typescript: ['app/**/*.ts'],
	typescriptDest: './server/public/app',
	includesFolder: './server/includes/'
};

gulp.task('default', ['serve']);

gulp.task('style', function() {
	console.log('style task has been run');
	gulp.src(paths.jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', {
			verbose: true
		}))
		.pipe(jscs());
});

gulp.task('inject', function() {
	console.log('inject task has been run');
	var wiredep = require('wiredep').stream;
	var inject = require('gulp-inject');
	var options = {
		bowerJson: require(paths.bowerFile),
		directory: paths.vendor,
		ignorePath: paths.ignorePath
	};
	var injectSrc = gulp.src(paths.customFiles, {read: false});
	var injectOptions = {
		ignorePath: paths.ignorePath2
	};

	return gulp.src(paths.layout)
		.pipe(wiredep(options))
		.pipe(inject(injectSrc, injectOptions))
		.pipe(gulp.dest(paths.includesFolder));
});

gulp.task('typescript', function() {
	var result = tsProject.src(paths.typescript)
		.pipe(ts(tsProject));

	return result.js.pipe(gulp.dest(paths.typescriptDest));
});

// gulp.task('serve', ['style', 'typescript', 'inject'], function() {
gulp.task('serve', ['style', 'inject'], function() {
	var options = {
		script: 'server.js',
		tasks: ['style', 'inject'],
		// tasks: ['style', 'typescript', 'inject'],
		delayTime: 0.3,
		env: {
			'PORT': 3000
		},
		watch: [paths.jsFiles, paths.customFiles, paths.typescript],
		livereload: true
	};

	return nodemon(options)
		.on('restart', function(ev) {
			console.log('Restarting....');
		});
});