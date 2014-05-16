/**
 * @author Charlie Calvert
 * 
 * This is the file that is used by BoatFactorySpec.html
 */

require.config({
	baseUrl : '',
	paths : {
		'SailBoatFactory' : 'javascripts/SailBoatFactory',
		'Sloop' : 'javascripts/Sloop',
		'Yawl' : 'javascripts/Yawl',
		'jasmine' : 'jasmine-2.0.0/jasmine',
		'jasmine-html' : 'jasmine-2.0.0/jasmine-html',
		'boot' : 'jasmine-2.0.0/boot',
	},
	shim : {
		'jasmine' : {
			exports : 'jasmine'
		},
		'jasmine-html' : {
			deps : [ 'jasmine' ],
			exports : 'jasmine'
		},
		'boot' : {
			deps : [ 'jasmine', 'jasmine-html' ],
			exports : 'jasmine'
		}
	}
});

/*
 * Do this two step dance with two requires when you want to load jasmine.
 */
require([ 'boot' ], function(boot) {
	'use strict';

	// Load the specs with second call to require
	require([ "BoatFactoryTests" ], function() {
		console.log("Main called.");
		window.onload();
	});
});
