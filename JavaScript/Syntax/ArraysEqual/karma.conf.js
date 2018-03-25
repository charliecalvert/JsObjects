/* global process: true */

module.exports = function(config) {
    'use strict';
    
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: './',

        frameworks: ['jasmine'],
        
        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'public/jquery-extensions.js',
            'spec/test*.js'
        ],

        // list of files to exclude
        exclude: [
        ],

        // Try 'spec' if you want more information
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging (Try LOG_INFO if you have problems)
        logLevel: config.LOG_DISABLE,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: true,

        // Start these browsers, currently available:
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 20000,

        // Set to false to watch files for changes
        singleRun: true,

        plugins: [
            "karma-jasmine",
            "karma-spec-reporter",
            'karma-phantomjs-launcher'
        ]
        
    });
};
