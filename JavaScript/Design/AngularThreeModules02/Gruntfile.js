/**
 * Created by charlie on 4/23/16.
 */

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'TestBoats.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                },
                strict: true
            }
        },

        watch: {
            files: ['<%= jshint.files %>', '<%= jscs.src %>'],
            tasks: ['jshint', 'jscs']
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.registerTask('beautify', ['jsbeautifier']);
    grunt.registerTask('check', ['beautify', 'jscs', 'jshint']);
    grunt.registerTask('default', ['jshint']);

};
