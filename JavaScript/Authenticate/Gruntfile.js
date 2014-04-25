module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        jshint: {
            files: ['**/*.js'],

            options: {
                ignores: ['*/angular-mocks.js',
                    '*/ui-bootstrap-tpls-*.js',
                    '*/knockout-*.js',
                    '*/Ractive.js',
                    '*/**/angular.js',
                    '*/**/require.js',
                    '**/node_modules/**',
                    '**/handlebars.js',
                    '**/jquery*.js',
                    '**/cordova*.js',
                    '**/qunit*.js',
                    '**/Deploy/**'
                ],
                define: true,
                strict: true,
                reporter: 'checkstyle',
                reporterOutput: 'result.xml',
                jshintrc: 'jshintrc.txt'
            }
        },

        jsbeautifier: {
            files: ["**/*.js", '!**/node_modules/**',
                '!**/coverage/**',
                '!**/Tests/Jasmine-2.0.0/**',
                '!*/**/cordova-?.?.?.js',
                '!*/**/handlebars.js',
                '!*/**/jquery*.js',
                '!*/**/qunit-1-??.?.js'
            ],
            options: {
                js: {
                    jslintHappy: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('pretty', ['jsbeautifier']);

};
