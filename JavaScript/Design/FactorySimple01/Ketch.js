/**
 * New node file
 */

var Ketch = function() { // implements Bicycle

};

Ketch.prototype = {
	tack : function() {
		console.log("Ketch tack called.");
	},
	
	luff : function() {
		console.log("Ketch luff called.");
	},
	
	reach : function() {
		console.log("Ketch reach called.");
	},
	
	anchor : function() {
		console.log("Ketch anchor called.");
	},
	
	dock: function() {
		console.log("Yawl dock called");
	}
};

exports.Ketch = Ketch;