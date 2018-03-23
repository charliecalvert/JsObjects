module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({

		pkg : '<json:package.json>',

		karma : {
			karma : {
				configFile : 'karma.conf.js'
			}
		},

		jshint : {
			files : [ '**/*.js' ],

			options : {
				ignores : [ 
				     '**/node_modules/**', '**/components/**'
				],
				reporter : require('jshint-stylish'),
				// reporterOutput : 'result.xml',
				strict : true,
                esversion: 6,
				globals : {
					describe : true,
					afterEach : true,
					beforeEach : true,
					inject : true,
					it : true,
					jasmine : true,
					expect : true
				}
			}
		},

	});

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('test', [ 'jshint', 'karma' ]);

};
