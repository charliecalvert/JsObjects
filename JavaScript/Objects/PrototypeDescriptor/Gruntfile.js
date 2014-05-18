module.exports = function(grunt) {
    'use strict';

    var zipFile = 'ObjectDemo01.zip';

    grunt.initConfig({
        zipFile: zipFile,

        jshint: {
            files: ['**/*.js'],

            options: {
                ignores: [
                    'jquery.js',
                    '**/coverage/**',
                    '**/node_modules/**',
                    '**/Tests/Jasmine-2.0.0/**'
                ],
                reporter: 'checkstyle',
                reporterOutput: 'result.xml',
                strict: true,
                newcap: false,
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
        },

        clean: {
            work: {
                src: [
                    "**/node_modules/**",
                    zipFile
                ]
            }
        },

        compress: {
            FactorySimple01: {
                options: {
                    archive: '<%= zipFile %>',
                    mode: 'zip'
                },
                files: [{
                    src: './*.js*'
                }, {
                    src: './Tests/**'
                }, {
                    src: './LICENSE'
                }, {
                    src: './README.md'
                }]
            }
        },

        copy: {
            deploy: {
                src: ['Server.js', 'Ketch.js', 'Sloop.js', 'Yawl.js',
                    'Interface.js'
                ],
                dest: 'Deploy/',
            },
            main: {
                src: '<%= zipFile %>',
                dest: process.env.HOMEPATH + '/.'
            }
        },

        jsbeautifier: {
            files: ["**/*.js", '!**/node_modules/**',
                '!**/coverage/**',
                '!**/Tests/Jasmine-2.0.0/**'
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
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('check', ['jshint']);
    grunt.registerTask('pretty', ['jsbeautifier']);
};
