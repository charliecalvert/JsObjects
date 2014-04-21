/**
 * @author Charlie Calvert
 * See http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/
 */

// Types.js - Constructors used behind the scenes
// Create Boats

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
