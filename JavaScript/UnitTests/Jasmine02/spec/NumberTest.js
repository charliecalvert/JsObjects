// var getEight = require('./getEight');

define('NumberTest', ['GetNumber'], function(getNumber) {
    'use strict';

    describe("Elvenware Get Number Suite", function() {
        // what is being tested
        function getNine() {
            return 9;
        }

        it("Call local getNine", function() {
            expect(getNine()).toBe(9);
        });

        it("Call module that returns 8", function() {
            expect(getNumber.getEight()).toBe(8);
        });

        it("Calls a module that returns 7", function() {
            expect(getNumber.getSeven()).toBe(7);
        });
    });
});
