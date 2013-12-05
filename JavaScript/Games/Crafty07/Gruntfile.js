module.exports = function(grunt) { 'use strict';

	grunt.initConfig({
		jshint: {
			files: ['**/*.js'],

			options: {
				ignores: ['*/angular-mocks.js', 
					'*/ui-bootstrap-tpls-*.js',
					'*/knockout-*.js', 
					'*/Ractive.js', 
					'*/**/angular.js',
					'**/Library/**', 
					'**/node_modules/**',
					'**/handlebars.js',
					'**/jquery*.js',
					'**/cordova*.js',
					'**/qunit*.js'],
				reporter: 'checkstyle',
				reporterOutput: 'result.xml',
				strict: true,
				newcap: false
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