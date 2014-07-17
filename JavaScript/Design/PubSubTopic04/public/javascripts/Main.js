/**
 * @author Charlie Calvert
 */

require.config({
	paths : {
		"jquery" : "jquery-2.1.0.min",
		"TinyPubSub" : "TinyPubSub"
	},
	shim : {
		"TinyPubSub" : {
			deps : [ "jquery" ],
			exports : "TinyPubSub"
		}
	}

});

require([ "TinyPubSub", "Subscriber", "Publisher", ], function(tinyPubSub, sub,
		pub) {
	'use strict';
	console.log("Main called.");
	sub.subscriber();
	pub.publisher();
});
