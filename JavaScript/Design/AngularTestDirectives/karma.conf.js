/* global process: true */

module.exports = function(config) {
    'use strict';

    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: './',

        frameworks: ['jasmine'],

        files: [
            'public/components/jquery/dist/jquery.min.js',
            'node_modules/jasmine-jquery/lib/*.js',
            'public/components/angular/angular.js',
            'public/components/angular-mocks/angular-mocks.js',
            'public/javascripts/*.js',
            'spec/test*.js',
            'spec/**/*.html'
        ],

        preprocessors: {
            '**/*.html': ['html2js']
        },
        /*
                ngHtml2JsPreprocessor: {


                    // the name of the Angular module to create
                    moduleName: "my.templates"
                }, */

        // list of files to exclude
        exclude: [],

        reporters: ['spec'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: true,

        // Start these browsers, currently available:
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 20000,

        // Set to false to watch files for changes
        singleRun: false,

        plugins: ['karma-jasmine',
            'karma-chrome-launcher',
            'karma-spec-reporter',
            'karma-phantomjs-launcher'
        ]

    });
};
