/**
 * @author Charlie Calvert
 */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {

    // A constructor for defining new trucks
    function Yawl(options) {'use strict';
        this.state = options.state || "used";
        this.wheelSize = options.wheelSize || "large";
        this.color = options.color || "blue";
        this.mizzen = options.mizzen || true;
    }

    return Yawl;

});
