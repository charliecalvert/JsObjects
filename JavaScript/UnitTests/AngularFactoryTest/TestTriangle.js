/**
 * @author Charlie Calvert
 */

describe("Test Circle", function() {
    'use strict';

    var triangle = null;

    beforeEach(function() {
        module('triangleMod');
    });

    beforeEach(inject(function($injector) {
        triangle = $injector.get('triangleFactory');
    }));

    it("Get Circle area", function() {
        expect(triangle.pythagoras()).toEqual(3);
    });
});
