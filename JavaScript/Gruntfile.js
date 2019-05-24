module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      yourTarget: {
        src: ["**/node_modules/**", "*/barFooGoo/**"]
      }
    },
    options: {
      js: {
        jslintHappy: false
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
};
