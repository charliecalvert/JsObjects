module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ['**/*.js'],

			options: {
				ignores: ['*/angular-mocks.js', 
					'*/ui-bootstrap-tpls-*.js',
					'*/knockout-*.js', 
					'**/Crafty.js',
					'*/Ractive.js', 
					'*/**/angular.js', 
					'**/angular-mocks.js',
					'**/node_modules/**',
					'**/handlebars.js',
					'**/jquery*.js',
					'**/cordova*.js',
					'**/qunit*.js'],
				reporter: 'checkstyle',
				reporterOutput: 'result.xml'
			}
		},
		
		clean :	{			
			yourTarget : {				
				src : [ "**/node_modules/**", '*/barFooGoo/**'
				]				
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
};