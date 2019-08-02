module.exports = function(grunt) { 'use strict';

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