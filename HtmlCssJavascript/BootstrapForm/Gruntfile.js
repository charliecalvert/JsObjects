module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({

		pkg : '<json:package.json>',

		jshint : {
			files : [ '**/*.js' ],

			options : {
				ignores : [ 
				     '**/node_modules/**', '**/components/**'
				],
				reporter: require("jshint-stylish"),
				strict : true,
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

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('test', [ 'jshint' ]);

};
