/**
 * New node file
 */

if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {
    'use strict';

    var Sloop = function() {};

    Sloop.prototype = {
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

    // exports.Sloop = Sloop;
    return Sloop;
});
