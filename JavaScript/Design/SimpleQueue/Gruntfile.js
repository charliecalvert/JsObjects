module.exports = function(grunt) {
    'use strict';

    var zipFile = 'SimpleQueue.zip';

    grunt.initConfig({
        zipFile: zipFile,

        jshint: {
            files: ['**/*.js'],

            options: {
                ignores: [
                    '*/**/jquery-?.?.?.min.js',
                    'coverage/**',
                    '**/node_modules/**',
                    '**/Tests/Jasmine/**'                    
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
                    "**/Deploy/**",
                    "**/DeployTests/**",
                    zipFile
                ]
            }
        },

        jasmine_node: {
            coverage: {},
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                extensions: 'js',
                specNameMatcher: 'Spec',
                captureExceptions: true,
                junitreport: {
                    report: false,
                    savePath: "./reports/",
                    useDotNotation: true,
                    consolidate: true
                }
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
                src: ['app.js',
                      'package.json',
                      'bin/www',
                      'routes/index.js',
                      'routes/users.js',
                      'public/javascripts/SimpleQueue.js', 
                      'public/javascripts/SimpleStack.js'
                ],
                dest: 'Deploy/',
            },
            deployTests: {
                src: ['app.js',
                      'Gruntfiles.js',
                      'package.json',
                      'TestRunner.js',
                      'bin/www',
                      'public/javascripts/jquery*.js',
                      'public/javascripts/QueueMaker.js',
                      'public/javascripts/SimpleQueue.js', 
                      'public/javascripts/SimpleStack.js',
                      'routes/index.js',
                      'routes/users.js',
                      'tests/QueueMakerSpec.js',
                      'tests/QueueSimpleSpec.js',
                      'tests/QueueSpec.html',
                      'tests/jasmine/*',
                      'views/error.jade',
                      'views/index.jade',
                      'views/layout.jade'
                      
                ],
                dest: 'DeployTests/',
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
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-jasmine-node-coverage');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('dist', ['clean:zip', 'compress:angularCalculator', 'copy:main', 'jasmine', 'jasmine_node']);
    grunt.registerTask('check', ['jshint', 'jasmine_node']);
    grunt.registerTask('deploy', ['copy:deploy']);
    grunt.registerTask('deployTests', ['copy:deployTests']);
    grunt.registerTask('pretty', ['jsbeautifier']);
};
