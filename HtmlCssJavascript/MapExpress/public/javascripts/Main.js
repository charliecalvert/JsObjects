/**
 * @author Charlie Calvert
 * @file Main.js
 */

/* require.config({
	paths : {
		"jquery" : ["http://code.jquery.com/jquery-1.11.1"],
		"googleMap": ["http://maps.googleapis.com/maps/api/js?sensor=true"],
		"Control": "Control"
	},
	shim : {
		"googleMap": ["jquery"]
	}
});*/

require.config({
	paths : {
		"jquery" : ["http://code.jquery.com/jquery-1.11.1"],
		"Control": "Control"
	}
});

require([ "jquery", "Control" ], function(jq, Control) {
	'use strict';
	console.log("Main called.");
	elf.control = new Control();
});
