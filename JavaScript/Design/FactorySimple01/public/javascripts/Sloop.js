/**
 * @author Charlie Calvert
 * See http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/
 */

/* globals define: true */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {'use strict';

    function Sloop(options) {

        // some defaults
        this.sailCount = options.sailCount || 2;
        this.state = options.state || "brand new";
        this.color = options.color || "silver";
        this.keel = options.keel || true;
        this.mizzen = options.mizzen || false;
    }

    return Sloop;

});