/**
 * @author Charlie
 */
describe("calculator", function() {'use strict';

    var circle = null;

    beforeEach(function() {
        module('circleMod');
    });

    beforeEach(inject(function($injector) {
        circle = $injector.get('circleFactory');
    }));

    it("Get Circle area", function() {
        expect(circle.areaOfCircle()).toEqual(0);
    });
});

