module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: '<json:package.json>',


        clean: {
            yourTarget: {
                src: ['**/node_modules/**', '**/components/**']
            }
        },


        pug: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: {
                    'spec/fixtures/home-page.html': ['views/home-page.jade'],
                    'spec/fixtures/home-description.html': [
                        'views/home-description.jade'
                    ],
                    'spec/fixtures/first-page.html': ['views/first-page.jade'],
                    'spec/fixtures/about-page.html': ['views/about-page.jade']
                }
            }
        },

        shell: {
            fixture: {
                command: 'sed "/extend/d" views/index.jade > views/fixture.jade'
            }
        },

        karma: {
            karma: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('fixture', ['exec:stripExtends', 'jade', 'karma']);
    grunt.registerTask('beautify', ['jsbeautifier']);
    grunt.registerTask('check', ['beautify', 'jscs', 'jshint']);
    grunt.registerTask('test', ['jshint', 'jade', 'karma']);
};
