/**
 * @author Charlie
 */
describe("My Circle", function() {'use strict';

    var circle = null;

    beforeEach(function() {
        module('myCircleMod');
    });

    beforeEach(inject(function($injector) {
        circle = $injector.get('myCircleFactory');
    }));

    it("gets circle area", function() {
        expect(circle.areaOfCircle()).toEqual(0);
    });
    
    it("gets circle circumference", function() {
        expect(circle.circumferenceOfCircle()).toEqual(1);
    });
});

