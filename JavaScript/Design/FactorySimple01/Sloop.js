/**
 * New node file
 */

var Sloop = function() { 'use strict';

};

Sloop.prototype = {
	tack : function() { 'use strict';
		console.log("Sloop tack called.");
	},
	
	luff : function() { 'use strict';
		console.log("Sloop luff called.");
	},
	
	reach : function() { 'use strict';
		console.log("Sloop reach called.");
	},
	
	anchor : function() { 'use strict';
		console.log("Sloop anchor called.");
	},
	
	dock: function() { 'use strict';
		console.log("Sloop dock called");
	}
};

exports.Sloop = Sloop;