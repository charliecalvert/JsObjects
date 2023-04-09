module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: '<json:package.json>',

        clean: {
            yourTarget: {
                src: ['**/node_modules/**', '**/components/**']
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
