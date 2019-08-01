module.exports = function(grunt) {
    'use strict';

    var zipFile = 'SimpleQueue.zip';

    grunt.initConfig({
        zipFile: zipFile,



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


    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-jasmine-node-coverage');

    grunt.registerTask('dist', ['clean:zip', 'compress:angularCalculator', 'copy:main', 'jasmine', 'jasmine_node']);
    grunt.registerTask('check', ['jasmine_node']);
    grunt.registerTask('deploy', ['copy:deploy']);
    grunt.registerTask('deployTests', ['copy:deployTests']);
};
