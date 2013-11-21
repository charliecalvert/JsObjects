module.exports = function(grunt) { 'use strict';

	grunt.initConfig({
		jshint: {
			files: ['**/*.js'],

			options: {
				ignores: ['*/angular-mocks.js', 
					'*/ui-bootstrap-tpls-*.js',
					'*/knockout-*.js', 
					'**/Crafty.js',
					'**/Crafty01.js',
					'*/Ractive.js', 
					'*/**/angular.js', 
					'**/angular-mocks.js',
					'**/angular-resource.js',
					'**/Library/angular-resource.min.js',
					'**/Library/angular.min.js',
					'**/node_modules/**',
					'**/handlebars.js',
					'**/jquery*.js',
					'**/cordova*.js',
					'**/qunit*.js'],
				reporter: 'checkstyle',
				reporterOutput: 'result.xml',
				strict: true,
				newcap: false,
				globals: {
					describe: true,
					afterEach: true,
					beforeEach: true,
					inject: true,
					it: true,
					jasmine: true,
					expect: true,
					angular: true,
					module: true,
					Crafty: true
				}
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