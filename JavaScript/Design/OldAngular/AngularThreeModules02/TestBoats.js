// specs code
describe('TestBoats', function() {
    'use strict';
    var boatController;
    var scope;

    beforeEach(function() {
        module('elvenApp');
    });

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        boatController = $controller('BoatController', {
            $scope: scope
        });
    }));

    it('Scope Test', function() {
        expect(scope.test).toEqual('My Test');
    });

    it('Controller Boat', function() {
        expect(boatController.controllerBoat).toEqual('Controller Boat');
    });

    it('Simple Boat', function() {
        expect(boatController.boat).toEqual("I'm a simple boat.");
    });

    it('Sailboat from Controller', function() {
        expect(boatController.sailboat).toEqual("I'm a sailboat.");
    });

    it('SailBoat Description', inject(function(sailboat) {
        expect(sailboat.description).toEqual("I'm a sailboat.");
    }));

    it('SailBoat getNine', inject(function(sailboat) {
        expect(sailboat.getNine()).toEqual(9);
    }));
});
