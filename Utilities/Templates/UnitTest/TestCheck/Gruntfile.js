module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        pkg: '<json:package.json>',

        jshint: {
            files: ['**/*.js'],

            options: {
                ignores: [
                    '**/node_modules/**', '**/components/**'
                ],
                reporter: require('jshint-stylish'),
                strict: true,
                jasmine: true
            }
        },

        clean: {
            yourTarget: {
                src: ['**/node_modules/**', '**/components/**']
            }
        },

        jscs: {
            src: '**/*.js',
            options: {
                config: '.jscsrc'
            }
        },

        'jsbeautifier': {
            files: ['**/*.js', '!**/node_modules/**', '!**/components/**'],
            options: {
                'indentSize': 4
            }
        },

        karma: {
            karma: {
                configFile: 'karma.conf.js'
            }
        },

        jasmine: {
            all: {
                src: globalConfig.src,

                options: {
                    specs: ['spec/test*.js']
                }
            },
            spec: {
                src: globalConfig.src,
                options: {
                    specs: ['spec/test-<%= globalConfig.file %>.js']
                }
            }
        },

        jade: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: {
                    'spec/fixtures/fixture.html': ['views/fixture.jade', '$ELF_TEMPLATES/JadeMixins/*.jade'],

                }
            }
        },

        exec: {

            stripExtends: {
                cmd: function() {
                    return 'sed "/extend/d" views/index.jade > views/fixture.jade';
                }
            },

            createBitly: {
                cmd: function() {
                    return 'jade views/bitly.jade --out spec/fixtures/';
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('beautify', ['jsbeautifier']);
    grunt.registerTask('check', ['beautify', 'jscs', 'jshint']);
    grunt.registerTask('test', ['jshint', 'karma']);
    grunt.registerTask('spec', 'Runs a task on a specified file', function(taskName, fileName) {
        globalConfig.file = fileName;
        grunt.task.run(taskName + ':spec');
    });
    grunt.registerTask('fixture', ['exec:stripExtends', 'jade', 'karma']);
};