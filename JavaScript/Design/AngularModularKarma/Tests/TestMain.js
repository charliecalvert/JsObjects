/**
 * @author Charlie Calvert
 */

describe("Test Main", function() {'use strict';
	var mainController = null;
	var nineFactory = null;
	var eightFactory = null;
	var tenFactory = null;

	beforeEach(function() {
		module('mainModule');
		module('eightModule');
		module('nineModule');
		module('tenModule');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		mainController = $rootScope.$new();
		$controller('mainController', { $scope: mainController});
		nineFactory = $injector.get('nineFactory');
		eightFactory = $injector.get('eightFactory');
		tenFactory = $injector.get('tenFactory');
	}));

	it("checks the Name", function() {
		var actual = mainController.name;
		expect(actual).toEqual('mainController');
	});

	it("gets the number eight", function() {
		expect(eightFactory.getEight()).toEqual(8);
	});

	it("gets the number nine", function() {
		expect(nineFactory.getNine()).toEqual(9);
	});

	it("gets the number ten", function() {
		expect(tenFactory.getTen()).toEqual(10);
	});

	it("adds numbers", function() {
		var operandA = 2;
		var operandB = 3;
		var actual = mainController.add(operandA, operandB);
		expect(actual).toEqual(operandA + operandB);
	});
	
});

