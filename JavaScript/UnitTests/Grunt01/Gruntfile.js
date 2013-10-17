module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			all: ['*.js']
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
};