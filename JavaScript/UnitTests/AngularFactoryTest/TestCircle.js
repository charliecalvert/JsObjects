/**
 * @author Charlie
 */
describe("Test Circle", function() {
    'use strict';

    var circle = null;

    beforeEach(function() {
        module('circleMod');
    });

    beforeEach(inject(function($injector) {
        circle = $injector.get('circleFactory');
    }));

    it("gets Circle area", function() {
        expect(circle.areaOfCircle(3)).toEqual(4);
    });

    it("gets Circle area", function() {
        expect(circle.circumferenceOfCircle(3)).toEqual(5);
    });

});
