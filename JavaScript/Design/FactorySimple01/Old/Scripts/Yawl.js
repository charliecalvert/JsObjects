/**
 * New node file
 */

var Yawl = function() {
    'use strict';

};

Yawl.prototype = {
    tack: function() {
        'use strict';
        return "Yawl tack called.";
    },

    luff: function() {
        'use strict';
        return "Yawl luff called.";
    },

    reach: function() {
        'use strict';
        return "Yawl reach called.";
    },

    anchor: function() {
        'use strict';
        return "Yawl anchor called.";
    },

    dock: function() {
        'use strict';
        return "Yawl dock called.";
    }
};

exports.Yawl = Yawl;
