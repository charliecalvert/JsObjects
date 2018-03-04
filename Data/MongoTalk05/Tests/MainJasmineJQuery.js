/**
 * @author Charlie Calvert
 */

require.config({
	paths : {
		'jquery' : './public/JavaScripts/jquery-2.1.0',
		//'pubSub' : '../Public/PubSubOn',
		//'clientMongo' : "../Public/ClientMongo",
		//'clientUi' : "../Public/ClientUi",
		'jasmine' : 'Library/jasmine',
		'jasmine-html' : 'Library/jasmine-html',
		'jasmine-jquery' : 'Library/jasmine-jquery',
		'boot' : 'Library/boot',

	},
	shim : {
		'jasmine' : {
			exports : 'jasmine'
		},
		'jasmine-html' : {
			deps : ['jasmine'],
			exports : 'jasmine'
		},
		'boot' : {
			deps : ['jasmine', 'jasmine-html'],
			exports : 'jasmine'
		},
		'jasmine-jquery' : {
			deps: ['boot'],
			exports: 'jasmine-jquery'
		}
	}
});

require(['jquery', 'jasmine-jquery'], function(j, b, c) { 'use strict';

	// Load the specs
	require(["JQuerySpec"], function() {
		console.log("Main called.");
		// Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
		window.onload();
	});
});
