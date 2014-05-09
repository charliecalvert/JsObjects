/**
 * @author Charlie Calvert
 */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {'use strict';

    var Sloop = require("./Boats/Sloop");
    var Yawl = require("./Boats/Yawl");
    var Ketch = require("./Boats/Ketch");
    var Interface = require("./Interface");

    var Boat = new Interface('Boat', ['tack', 'luff', 'reach']);
    var OverNight = new Interface('OverNight', ['anchor', 'dock']);

    var BoatBuilder = function() {
    };

    BoatBuilder.prototype = {
        buildBoat : function(boatType) {
            var boat;
            console.log("===================");
            console.log("boatType: ", boatType);
            console.log("===================");
            switch (boatType) {
                case 'Sloop':
                    boat = new Sloop();
                    break;
                case 'Yawl':
                    boat = new Yawl();
                    break;
                case 'Ketch':
                    boat = new Ketch();
                    break;
                default:
                    boat = new Sloop();
            }
            Interface.ensureImplements(boat, Boat, OverNight);

            console.log('---------------');
            console.log(boat.tack());
            console.log(boat.anchor());

            return boat;
        }
    };

    return BoatBuilder;
});
