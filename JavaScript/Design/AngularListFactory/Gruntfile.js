module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ['*.js'],
			options: {
				ignores: ['angular.js']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
};