/* global process: true */

module.exports = function(config) { 'use strict';
  config.set({
  
	// base path, that will be used to resolve files and exclude
	basePath: '',

	frameworks: ['jasmine', 'commonjs'],

	// list of files / patterns to load in the browser
	files: [
		'Library/angular.js',
		'Library/angular-mocks.js',
		'Source/NineModule.js',
		'Source/EightModule.js',
		'Source/TenModule.js',
		'Source/Main.js',
		'Tests/TestMain.js'
	],

	// list of files to exclude
	exclude: [
	],

	preprocessors: {
		'client/*.js': ['commonjs'],
		'test/client/*.js': ['commonjs']
	},

	// CLI --reporters progress
	reporters: ['progress', 'junit'],

	junitReporter: {
		// will be resolved to basePath (in the same way as files/exclude patterns)
		outputFile: 'test-results.xml'
	},

	// web server port
	// CLI --port 9876
	port: 9876,

	// enable / disable colors in the output (reporters and logs)
	// CLI --colors --no-colors
	colors: true,

	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	// CLI --log-level debug
	logLevel: config.LOG_INFO,

	// enable / disable watching file and executing tests whenever any file changes
	// CLI --auto-watch --no-auto-watch
	autoWatch: true,

	browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
	// browsers: ['PhantomJS'],

	// If browser does not capture in given timeout [ms], kill it
	// CLI --capture-timeout 5000
	captureTimeout: 20000,

	// Auto run tests on start (when browsers are captured) and exit
	// CLI --single-run --no-single-run
	singleRun: false,

	// report which specs are slower than 500ms
	// CLI --report-slower-than 500
	reportSlowerThan: 500,

	plugins: [
		'karma-jasmine',
		'karma-chrome-launcher',
		'karma-firefox-launcher',
		'karma-junit-reporter',
		'karma-commonjs'
	]
  });
};