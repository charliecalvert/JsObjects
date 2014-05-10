/*globals describe:true, it:true, expect:true, SailBoatFactory: true, Sloop: true */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(["SailBoatFactory", "Sloop", "Yawl"], function(SailBoatFactory, Sloop, Yawl) {'use strict';

// define([], function() {'use strict';
    describe("Simple Factory Suite", function() {
        
        //var SailBoatFactory = require('../Factory/SailBoatFactory');
        //var Sloop = require('../Factory/Sloop');
        //var Yawl = require('../Factory/Yawl'); 

        it("proves we can run a test", function() {
            expect(true).toBe(true);
        });

        it("creates a sloop", function() {
            // Create an instance of our factory that makes boats
            var boatFactory = new SailBoatFactory();
            var sloop = boatFactory.createBoat({
                boatType : "sloop",
                color : "yellow",
                sails : 3
            });

            // Test to confirm our Sloop was created
            expect( sloop instanceof Sloop).toBe(true);
        });

        it("creates a yellow sloop", function() {
            // Create an instance of our factory that makes boats
            var boatFactory = new SailBoatFactory();
            var sloop = boatFactory.createBoat({
                boatType : "sloop",
                color : "yellow",
                sails : 3
            });

            expect(sloop.color).toBe('yellow');
        });

        it("shows that a yawl has a mizzen", function() {
            var boatFactory = new SailBoatFactory();
            var yawl = boatFactory.createBoat({
                boatType : "yawl",
                color : "yellow",
                sails : 3
            });

            expect(yawl.mizzen).toBe(true);
        });

    });

}); 
