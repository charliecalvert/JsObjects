// specs code
describe("Test All Modes", function() {
    'use strict';
    var addController = null;
    var circle = null;

    beforeEach(function() {
        module('myApp');
        module('circleMod');
        module('triangleMod');
    });

    beforeEach(inject(function($rootScope, $controller, $injector) {
        addController = $rootScope.$new();
        $controller('AddController', {
            $scope: addController
        });
        circle = $injector.get('circleFactory');
    }));

    it("Sum two values", function() {
        addController.operandA = 3;
        addController.operandB = 5;
        expect(addController.func()).toEqual(8);
    });

    it("Sum two other values", function() {
        addController.operandA = 2;
        addController.operandB = 9;
        expect(addController.func()).toEqual(11);
    });

    it("get circle area", function() {
        expect(circle.areaOfCircle(6)).toEqual(7);
    });
});
