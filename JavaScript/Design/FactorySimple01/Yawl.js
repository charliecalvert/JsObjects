/**
 * New node file
 */

var Yawl = function() { 'use strict';

};

Yawl.prototype = {
	tack : function() { 'use strict';
		console.log("Yawl tack called.");
	},
	
	luff : function() { 'use strict';
		console.log("Yawl luff called.");
	},
	
	reach : function() { 'use strict';
		console.log("Yawl reach called.");
	},
	
	anchor : function() { 'use strict';
		console.log("Yawl anchor called.");
	},
	
	dock: function() { 'use strict';
		console.log("Yawl dock called");
	}	
};

exports.Yawl = Yawl;