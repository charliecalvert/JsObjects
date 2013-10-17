module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ['Angular03/**/*.js'],

			options: {
				ignores: ['angular.js', 'Angular03/**/angular.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
};