module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['**/*.js'],

            options: {
                ignores: ['*/angular-mocks.js', 
                    '*/**/knockout-*.js', 
                    '*/**/angular.js', 
                    '*/**/angular-animate.js',
                    '*/**/angular.min.js', 
                    '*/**/angular-mocks.js',
                    '*/**/angular-resource.js',
                    '*/**/angular-resource.min.js',
                    '*/**/bootstrap.min.js',
                    '*/**/crafty.js',
                    '*/**/crafty01.js',
                    '*/**/handlebars.js',
                    '*/**/jasmine.js',
                    '*/**/jasmine-html.js',
                    '*/**/jasmine-jquery.js',
                    '*/**/jquery*.js',
                    '*/**/cordova*.js',
                    '*/**/ractive.js',
                    '*/**/require.js',
                    '*/**/qunit*.js',
                    '*/**/ui-bootstrap-tpls-*.js',
                    '**/coverage/**',
                    '**/jasmine-2.0.0/**',
                    '**/node_modules/**'
                ],
                reporter: 'checkstyle',
                reporterOutput: 'result.xml',
                strict: true,
            }
        },
        
        clean : {           
            yourTarget : {              
                src : [ "**/node_modules/**", '*/barFooGoo/**'
                ]               
            }
        },
        
        jsbeautifier: {
            files: ["**/*.js", '!**/node_modules/**',
                '!**/coverage/**',
                '!**/Tests/Jasmine-2.0.0/**',
                '!*/**/cordova-?.?.?.js',
                '!*/**/handlebars.js',
                '!*/**/jquery*.js',
                '!*/**/qunit-1-??.?.js'
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