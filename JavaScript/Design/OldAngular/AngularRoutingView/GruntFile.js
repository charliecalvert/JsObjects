/**
 * GruntFile.js
 */
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            files: ['**/*.js'],

            options: {
                ignores: [
                    '**/node_modules/**',
                    '**/routes/**',
                    '**/app.js',
                    '**/handlebars.js',
                    '**/jquery*.js',
                    '**/ColladaLoader.js',
                    '**/cordova*.js',
                    '**/MTLLoader.js',
                    '**/OBJMTLLoader.js',
                    '**/PointerLockControls.js',
                    '**/require.js',
                    '**/TinyPubSub.js',
                    '**/three.js',
                    '**/qunit*.js'
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
                src: ['**/node_modules/**']
            }
        },

        jsbeautifier: {
            files: [
                '**/*.js',
                '!**/node_modules/**',
                '!**/coverage/**',
                '!**/jasmine-2.0.0/**',
                '!**/jquery.js',
                '!**/require.js',
                '!**/three.js',
                '!**/ColladaLoader.js',
                '!**/MTLLoader.js',
                '!**/OBJMTLLoader.js',
                '!**/PointerLockControls.js',
                '!**/TinyPubSub.js'
            ],
            options: {
                js: {
                    mode: 'VERIFY_AND_WRITE'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.registerTask('pretty', ['jsbeautifier']);
};
