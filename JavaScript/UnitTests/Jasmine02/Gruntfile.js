module.exports = function(grunt) {
    'use strict';

    var zipFile = 'Jasmine02.zip';

    grunt.initConfig({
        zipFile: zipFile,

        jshint: {
            files: ['*/*.js'],

            options: {
                ignores: [                    
                    '**/node_modules/**',
                    '**/jquery-2.0.3.js',
                    '**/requirejs-wrapper*.js',
                    '**/requirejs-setup*.js'
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
                ]
            },

            zip: {
                src: []
            }
        },

        compress: {
            jasmine02: {
                options: {
                    archive: '<%= zipFile %>',
                    mode: 'zip'
                },
                files: [{
                    src: './*.html'
                }, {
                    src: './*.js*'
                }, {
                    src: './*.css'
                }, {
                    src: './Assets/**'
                }, {
                    src: './Library/**'
                }, {
                    src: './Source/**'
                }, {
                    src: './Style/**'
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
            main: {
                src: '<%= zipFile %>',
                dest: process.env.HOME + '/temp/'
            }   
     
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');    

    grunt.registerTask('dist', ['clean:zip', 'compress:jasmine02', 'copy:main']);
};
