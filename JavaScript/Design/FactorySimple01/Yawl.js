/**
 * New node file
 */

var Yawl = function() { // implements Bicycle

};

Yawl.prototype = {
	tack : function() {
		console.log("Yawl tack called.");
	},
	
	luff : function() {
		console.log("Yawl luff called.");
	},
	
	reach : function() {
		console.log("Yawl reach called.");
	},
	
	anchor : function() {
		console.log("Yawl anchor called.");
	},
	
	dock: function() {
		console.log("Yawl dock called");
	}	
};

exports.Yawl = Yawl;