

module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        jshint: {
            files: ["**/*.js"],

            options: {
                ignores: ["*/angular-mocks.js",
                    "*/ui-bootstrap-tpls-*.js",
                    "*/knockout-*.js",
                    "*/Ractive.js",
                    "*/**/angular.js",
                    "**/node_modules/**",
                    "**/handlebars.js",
                    "**/jquery*.js",
                    "**/cordova*.js",
                    "**/qunit*.js"
                ],
                reporter: "checkstyle",
                reporterOutput: "result.xml"
            }
        },
        eslint: {
            options: {
                configFile: ".eslintrc.json",
                fix: true
            },
            target: ["*.js"]
        },
        clean: {
            yourTarget: {
                src: ["**/node_modules/**", "**/components/**"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    //grunt.loadNpmTasks("load-grunt-tasks");
    grunt.registerTask("default", ["eslint"]);
};
