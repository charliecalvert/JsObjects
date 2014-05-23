/**
 * @author Charlie Calvert
 */

/* globals define: true */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {'use strict';

    // A constructor for defining new trucks
    function Yawl(options) {
        this.state = options.state || "used";
        this.wheelSize = options.wheelSize || "large";
        this.color = options.color || "blue";
        this.mizzen = options.mizzen || true;
    }

    return Yawl;

});
