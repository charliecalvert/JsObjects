/**
 * @author Charlie Calvert
 * See http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/
 */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {

    function Sloop(options) {'use strict';

        // some defaults
        this.sailCount = options.sailCount || 2;
        this.state = options.state || "brand new";
        this.color = options.color || "silver";
        this.keel = options.keel || true;
        this.mizen = options.mizen || false;
    }

    return Sloop;

}); 