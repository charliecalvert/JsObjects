// specs code
describe("TestBoats", function() {'use strict';
	var boatController,
		scope;


	beforeEach(function() {
		module('elvenApp');
	});

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		boatController = $controller('BoatController', {
			$scope: scope
		});
	}));

	it("Scope Test", function() {
		expect(scope.test).toEqual("My Test");
	});

	it("Simple Boat", function() {
		expect(boatController.simple).toEqual("Simple Boat");		
	});
	
	it("Simple Boat2", function() {
		expect(boatController.boat).toEqual("I'm a simple boat.");
	});
	
	it("SailBoat Description", inject(function(sailboat) {
		expect(sailboat.description).toEqual("I'm a sailboat.");		
	})); 
	
	it("Boat Description", inject(function(boat) {
		expect(boat.description).toEqual("I'm a simple boat.");
	}));


});
