module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            files: ['**/*.js'],

            options: {
                ignores: ['*/angular-mocks.js',
                    '*/ui-bootstrap-tpls-*.js',
                    '*/knockout-*.js',
                    '**/Library/**',
                    '*/Ractive.js',
                    '*/**/angular.js',
                    '*/**/jquery.js',
                    '*/**/jquery-?.?.?.min.js',
                    '*/**/jquery-?.?.?.js',
                    '*/**/qunit-1.??.?.js',
                    '**/coverage/**',
                    '**/node_modules/**',
                    '**/jasmine-2.?.?/**',
                    '**/jasmine/**'
                ],
                reporter: 'checkstyle',
                reporterOutput: 'result.xml',
                strict: true,
                // browser: true,
                // devel: true,
                globals: {
                    describe: true,
                    afterEach: true,
                    beforeEach: true,
                    inject: true,
                    it: true,
                    jasmine: true,
                    expect: true,
                    angular: true,
                    process: true,
                    module: true,
                    Crafty: true
                }
            },
        },

        clean: {
            yourTarget: {
                src: ["**/node_modules/**", '*/barFooGoo/**']
            }
        },

        "watch": {
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'result.html'
                ]
            },

            "jshint_client": {
                "tasks": [
                    "jshint"
                ],
                "files": ['**/*.js'],
                options: {
                    ignores: ['*/angular-mocks.js',
                        '*/ui-bootstrap-tpls-*.js',
                        '*/knockout-*.js',
                        '**/Library/**',
                        '*/Ractive.js',
                        '*/**/angular.js',
                        '**/node_modules/**'
                    ],
                    reporter: 'checkstyle',
                    reporterOutput: 'result.xml',
                    strict: true,
                    globals: {
                        describe: true,
                        afterEach: true,
                        beforeEach: true,
                        inject: true,
                        it: true,
                        jasmine: true,
                        expect: true,
                        angular: true,
                        module: true,
                        Crafty: true
                    }
                }
            }
        },

        jsbeautifier: {
            files: ["**/*.js", '!**/node_modules/**',
                '!**/coverage/**',
                '!**/jquery*.js'
            ],
            options: {
                js: {
                    jslintHappy: false
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('pretty', ['jsbeautifier']);
};
