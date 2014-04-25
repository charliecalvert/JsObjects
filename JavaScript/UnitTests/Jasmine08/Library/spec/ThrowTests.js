/**
 * @author charlie
 */

define('ThrowTests', ['objectMethod'], function(objectMethod) {
    'use strict';
    describe("Elvenware toThrow Suite", function() {

        it("shows objectMethod cannot be used with new", function() {
            expect(function() {
                new objectMethod();
            })
                .toThrow(new TypeError('object is not a function'));
        });

        it("expects seven to be seven", function() {
            expect(7).toBe(7);
        });
    });
});
