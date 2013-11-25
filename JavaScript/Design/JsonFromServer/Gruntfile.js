module.exports = function(grunt) { 'use strict';

	var zipFile = 'JsonFromServer.zip';

	grunt.initConfig({
		zipFile: zipFile,
		
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
					'**/angular.min.js',
					'**/angular-mocks.js',
					'**/angular-resource.js',
					'**/angular-resource.min.js',
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
			work: {
				src : [ 
					"**/node_modules/**", 
				]
			},
			
			zip: {
				src: [  ]
			}
		},

		compress: {
				angularKarma: {
					options: {
						archive: '<%= zipFile %>',
						mode: 'zip'
					},
					files: [
						{ src: './*.html' },
						{ src: './*.js*' },
						{ src: './Assets/**' },
						{ src: './Library/**' },
						{ src: './Source/**' },
						{ src: './Style/**' },
						{ src: './Tests/**' },
						{ src: './LICENSE' },
						{ src: './README.md' }
					]
				}
			},

		copy: {
			main: {
				src: '<%= zipFile %>',
				dest: process.env.HOMEPATH + '/Aptana Rubles/ElfRuble/templates/'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('dist', ['clean:zip', 'compress:angularKarma', 'copy:main']);
};
