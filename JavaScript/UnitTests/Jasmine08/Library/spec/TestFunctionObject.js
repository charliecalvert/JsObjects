/**
 * @author charlie
 */

define('testFunctionObject', ['FunctionObject'], function(functionObject) {
    'use strict';

    describe("Test Function Object", function() {

        if ('function object exists', function() {
            expect(functionObject).toBeTruthy();
        });

        it("cannot access private feetPerMile", function() {
            var actual = new functionObject().feetPerMile;
            expect(actual).toBe(undefined);
        });

        it("shows you can call new to access a method of the object", function() {
            expect(new functionObject().getA()).toBe(1);
        });

        it("shows you must call new to access a method of the object", function() {
            expect(function() {
                functionObject().getA();
            }).toThrow(new TypeError("Cannot set property 'getA' of undefined"));                
            // }).toThrow("TypeError: Cannot set property 'getA' of undefined.");
        });
    });

});
