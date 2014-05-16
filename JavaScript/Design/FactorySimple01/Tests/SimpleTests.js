/*globals describe:true, it:true, expect:true, SailBoatFactory: true, Sloop: true, define: true */

define(["SailBoatFactory", "Sloop"], function(SailBoatFactory, Sloop) {
    'use strict';

    describe("Simple Suite", function() {

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

    });

});
