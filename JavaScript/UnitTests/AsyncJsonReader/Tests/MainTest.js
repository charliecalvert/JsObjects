/**
 * @author Charlie Calvert
 */

require.config({
	baseUrl : "/",
	paths : {
		"jquery" : "public/javascripts/jquery-2.1.0.min",
		"JsonReader" : "public/javascripts/Readers/JsonReader",
		'jasmine' : 'jasmine-2.0.0/jasmine',
		'jasmine-html' : 'jasmine-2.0.0/jasmine-html',
		'boot' : 'jasmine-2.0.0/boot',
		'DisplayFileList': 'public/javascripts/Display/DisplayFileList',
		'Utilities': "public/javascripts/Utilities"
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

require([ 'boot' ], function(jasmine) {
	'use strict';

	require([ "jquery", "ReaderTests" ], function(jq, ReaderTests) {		
		console.log("Main called.");
		$("p").hide();
		window.onload();
	});
});