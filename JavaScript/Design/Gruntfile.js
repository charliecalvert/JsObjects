module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ['*/**/*.js'],

			options: {
				ignores: ['*/angular-mocks.js', 
					'*/ui-bootstrap-tpls-*.js',
					'*/knockout-*.js', 
					'*/Ractive.js', 
					'*/**/angular.js', 
					'**/node_modules/**']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
};