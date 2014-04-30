/**
 * @author Charlie Calvert
 * 
 * Create Boats
 * 
 * See http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/
 */


if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {

    var Sloop = require("Sloop");
    var Yawl = require("Yawl");
    
    // Define a SailBoat factory constructor function
    function SailBoatFactory() {}
    
    // By default we create Sloops
    SailBoatFactory.prototype.boatClass = Sloop;
    
    // Create a Boat with this function
    SailBoatFactory.prototype.createBoat = function(options) {
        'use strict';
    
        switch (options.boatType) {
            case "sloop":
                this.boatClass = Sloop;
                break;
            case "yawl":
                this.boatClass = Yawl;
                break;
            default:
                this.boatClass = Sloop;
        }
    
        return new this.boatClass(options);
    
    };
    
    return SailBoatFactory;
});