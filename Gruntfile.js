// test git

module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        
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
    grunt.registerTask("default", ["eslint"]);
};
