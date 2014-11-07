module.exports = function(grunt) {

    basicOptions = {
        ignores : [ '*/angular-mocks.js', '*/ui-bootstrap-tpls-*.js',
                '*/knockout-*.js', '*/Ractive.js', '*/**/angular.js',
                '**/node_modules/**', '**/routes/**', '**/app.js',
                '**/handlebars.js', '**/jquery*.js', '**/ColladaLoader.js',
                '**/cordova*.js', '**/MTLLoader.js', '**/OBJMTLLoader.js',
                '**/PointerLockControls.js', '**/require.js',
                '**/TinyPubSub.js', '**/three.js', '**/qunit*.js' ],
        reporter : 'checkstyle',
        strict : true,
        reporterOutput : 'result.xml'
    };

    defaultFiles = [ '**/*.js' ];
    anderson = [ 'isit320_anderson/**/*.js' ];
    jackson = [ 'isit320_jackson/Week05_Particles/**/*.js' ];
    kascheev = [ 'isit320_kascheev/Week05_TinyMapRefactor/**/*.js' ];
    tania = [ 'isit320_vendrovska/Week04_Particles_taniaLV/**/*.js' ];
    li = [ 'isit320_li/Week04_Particles_li/**/*.js' ];
    pennock = [ 'isit320_pennock/Week05_Particles/**/*.js' ];
    wadley = [ 'isit320_Wadley/Week04_SimpleParticle/**/*.js' ];
    waters = [ 'isit320_Waters/Week05_Particles/**/*.js' ];
    

    grunt.initConfig({
        jshint : {
            files : anderson,
            options : basicOptions
        },

        clean : {
            yourTarget : {
                src : [ "**/node_modules/**", '*/barFooGoo/**' ]
            }
        },

        jsbeautifier : {
            files : [ "**/*.js", '!**/node_modules/**', '!**/coverage/**',
                    '!**/jasmine-2.0.0/**', '!**/jquery-2.1.1.js',
                    '!**/require.js' ],
            options : {
                js : {
                    mode : "VERIFY_AND_WRITE"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.registerTask('pretty', ['jsbeautifier']);
};
