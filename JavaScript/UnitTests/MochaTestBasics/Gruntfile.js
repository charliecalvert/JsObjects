module.exports = function(grunt) {
	'use strict';

	var zipFile = 'ObjectBasicsNoRequire.zip';

	grunt.initConfig({
		zipFile : zipFile,

		pkg : '<json:package.json>',

		jshint : {
			files : [ '**/*.js' ],

			options : {
				ignores : [ 
				     '**/node_modules/**'
				],
				reporter : 'checkstyle',
				reporterOutput : 'result.xml',
				strict : true,				
				globals : {
					describe : true,
					afterEach : true,
					beforeEach : true,
					inject : true,
					it : true,
					jasmine : true,
					expect : true,
					module : true,
				}
			}
		},

		clean : {
			work : {
				src : [ "**/node_modules/**", ]
			},

			zip : {
				src : ['<%= zipFile %>']
			}
		},

		compress : {
			jasmine02 : {
				options : {
					archive : '<%= zipFile %>',
					mode : 'zip'
				},
				files : [ {
					src : ['./Gruntfile.js*', 'package.json']
				}, {
					src : ['./Source/**', './Test/**']
				}, {
					src : ['./.project', './README.md', 'RunMocha']
				} ]
			}
		},

		copy : {
			main : {
				src : '<%= zipFile %>',
				dest : process.env.HOME + '/temp/'
			}

		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('dist', [ 'clean:zip', 'compress:jasmine02', 'copy:main' ]);	
};
