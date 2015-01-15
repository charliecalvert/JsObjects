describe('Require Js Test Suites', function() {
    'use strict';

    var getNumber;

    beforeAll(function (done) {
        // This saves the modules for use in tests. You have to use
        // the done callback because this is asynchronous.
        requirejs(['GetNumber'], function (mo) {
            getNumber = mo;
            done();
        });
    });

    describe("Elvenware Get Plain Number Suite", function () {



        // Let's test one local method. The other methods to be tested are in GetNumber
        function getNine() {
            return 9;
        }

        it("Call local getNine", function () {
            expect(getNine()).toBe(9);
        });

        it("Call module that returns 8", function () {
            expect(getNumber.getEight()).toBe(8);
        });

        it("Calls a module that returns 7", function () {
            expect(getNumber.getSeven()).toBe(7);
        });
    });

});