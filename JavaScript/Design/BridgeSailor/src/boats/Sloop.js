/**
 * New node file
 */

var Sloop = function() {};

Sloop.prototype = {
    getBoatType: function() {
        return 'Sloop';
    },

    tack: function() {
        return 'Sloop tack called.';
    },

    luff: function() {
        return 'Sloop luff called.';
    },

    reach: function() {
        return 'Sloop reach called.';
    },

    anchor: function() {
        return 'Sloop anchor called.';
    },

    dock: function() {
        return 'Sloop dock called.';
    }
};

export default Sloop;
