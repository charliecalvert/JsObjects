/**
 * New node file
 */

var Sloop = function() { // implements Bicycle

};

Sloop.prototype = {
	tack : function() {
		console.log("Sloop tack called.");
	},
	
	luff : function() {
		console.log("Sloop luff called.");
	},
	
	reach : function() {
		console.log("Sloop reach called.");
	},
	
	anchor : function() {
		console.log("Sloop anchor called.");
	},
	
	dock: function() {
		console.log("Sloop dock called");
	}
};

exports.Sloop = Sloop;