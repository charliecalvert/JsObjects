/*globals describe:true, it:true, expect:true, SailBoatFactory: true, Sloop: true */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(["SailorBridge", "SailorExpertBridge", "Sloop", "Yawl", "Ketch"], function(Sailor, SailorExpert, sloop, yawl, ketch) {'use strict';

    describe("Simple Sailor Suite", function() {

        it("proves we can run a test", function() {
            expect(true).toBe(true);
        });
        
        it("creates a sloop and checks its name", function() {
            var boatType = sloop.getBoatType();
            expect(boatType).toBe("Sloop");
        });

        it("creates a Yawl and checks its name", function() {
            var boatType = yawl.getBoatType();
            expect(boatType).toBe("Yawl");
        });

        it("creates a Ketch and checks its name", function() {
            var boatType = ketch.getBoatType();
            expect(boatType).toBe("Ketch");
        });

        it("shows that a sailor can tack", function() {
            var sailor = new Sailor(sloop);
            var result = sailor.tack();
            expect(result).toBe('Sloop tack called.');
        });
        
         it("shows that a sailor expert can tack", function() {
            var sailor = new SailorExpert(sloop);
            var result = sailor.tack();
            expect(result).toBe('Sloop tack called.');
        });
        
        
        it("shows that a sailor expert can tack to port", function() {
            var sailor = new SailorExpert(sloop);
            var tackPort = sailor.tackPort();
            var currentTack = sailor.getCurrentTack();            
            expect(tackPort).toBe('Sloop tack called.');
            expect(currentTack).toBe("This Sloop is on the port tack.");
        });
    });

});
