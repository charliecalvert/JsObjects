/**
 * New node file
 */

var Sloop = function() {
    'use strict';

};

Sloop.prototype = {
    tack: function() {
        'use strict';
        return "Sloop tack called.";
    },

    luff: function() {
        'use strict';
        return "Sloop luff called.";
    },

    reach: function() {
        'use strict';
        return "Sloop reach called.";
    },

    anchor: function() {
        'use strict';
        return "Sloop anchor called.";
    },

    dock: function() {
        'use strict';
        return "Sloop dock called.";
    }
};

exports.Sloop = Sloop;
