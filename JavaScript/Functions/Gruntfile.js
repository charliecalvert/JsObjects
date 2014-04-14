module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['**/*.js'],

            options: {
                ignores: ['*/angular-mocks.js',
                    '*/ui-bootstrap-tpls-*.js',
                    '*/knockout-*.js',
                    '*/Ractive.js',
                    '*/**/angular.js',
                    '**/node_modules/**',
                    '**/handlebars.js',
                    '**/jquery*.js',
                    '**/cordova*.js',
                    '**/qunit*.js'
                ],
                reporter: 'checkstyle',
                reporterOutput: 'result.xml'
            }
        },

        clean: {
            yourTarget: {
                src: ["**/node_modules/**", '*/barFooGoo/**']
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
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('pretty', ['jsbeautifier']);
};
