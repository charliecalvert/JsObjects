/**
 * New node file
 */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {
	'use strict';
    
    var Ketch = function() {

    };

    Ketch.prototype = {
        getBoatType: function() {
            return 'Ketch';
        },
        
        tack : function() {
            return "Ketch tack called.";
        },

        luff : function() {
            return "Ketch luff called.";
        },

        reach : function() {
            return "Ketch reach called.";
        },

        anchor : function() {
            return "Ketch anchor called.";
        },

        dock : function() {
            return "Ketch dock called.";
        },
    };

    return new Ketch();
});
// exports.Ketch = Ketch;
