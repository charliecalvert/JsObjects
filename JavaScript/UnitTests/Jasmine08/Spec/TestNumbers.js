// var getEight = require('./getEight');

define('TestNumbers', ['objectMethod'], function(objectMethod) {
    'use strict';
    describe("Elvenware Get Number Suite", function() {

        it("gets objectMethod a", function() {
            expect(objectMethod.a).toBe(1);
        });

        it("gets objectMethod b", function() {
            expect(objectMethod.b).toBe(2);
        });
    });
});
