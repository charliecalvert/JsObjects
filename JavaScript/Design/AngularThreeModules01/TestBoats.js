// specs code
describe("TestBoats", function() {'use strict';
	var boatController = null;	

	beforeEach(function() {
		module('boat');
		module('sailboat');
		module('elvenApp');		
	});

	beforeEach(inject(function($rootScope, $controller) {
		boatController = $rootScope.$new();
		$controller('BoatController', { $scope: boatController }); 
	}));

	it("Simple Boat", function() {
		expect(boatController.simple).toEqual("Simple Boat");		
	});
	
	it("Simple Boat2", function() {
		expect(boatController.boat).toEqual("I'm a simple boat property.");		
	});
	
	it("SailBoat Description", inject(function(sailboat) {
		expect(sailboat.description).toEqual("I'm a sailboat.");		
	})); 
	
	it("Boat Description", inject(function(boat) {
		expect(boat.description).toEqual("I'm a simple boat");
	}));


});
