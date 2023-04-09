module.exports = function (grunt) {
    'use strict';

    var zipFile = 'FactorySimple01.zip';

    grunt.initConfig({
        zipFile: zipFile,

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
                    savePath: './reports/jasmine/',
                    useDotNotation: true,
                    consolidate: true
                }
            },
            all: ['Tests/', 'Factory']
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
                // browsers: ['PhantomJS']
            }
        },

        compress: {
            FactorySimple01: {
                options: {
                    archive: '<%= zipFile %>',
                    mode: 'zip'
                },
                files: [
                    {
                        src: './*.js*'
                    },
                    {
                        src: './Tests/**'
                    },
                    {
                        src: './LICENSE'
                    },
                    {
                        src: './README.md'
                    }
                ]
            }
        },

        copy: {
            deploy: {
                src: [
                    'Server.js',
                    'Ketch.js',
                    'Sloop.js',
                    'Yawl.js',
                    'Interface.js'
                ],
                dest: 'Deploy/'
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
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('dist', [
        'clean:zip',
        'compress:angularCalculator',
        'copy:main',
        'jasmine',
        'jasmine_node'
    ]);
    grunt.registerTask('check', [jasmine_node']);
};
