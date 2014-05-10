/**
 * New node file
 */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {'use strict';

    var Yawl = function() {

    };

    Yawl.prototype = {
        tack : function() {
            return "Yawl tack called.";
        },

        luff : function() {
            return "Yawl luff called.";
        },

        reach : function() {
            return "Yawl reach called.";
        },

        anchor : function() {
            return "Yawl anchor called.";
        },

        dock : function() {
            return "Yawl dock called.";
        }
    };

    // exports.Yawl = Yawl;
    return Yawl;
});
