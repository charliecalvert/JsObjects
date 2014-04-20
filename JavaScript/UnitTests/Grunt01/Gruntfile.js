module.exports = function(grunt) {
	'use strict';
	
	grunt.initConfig({
		jshint: {
			all: ['*.js']
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
};