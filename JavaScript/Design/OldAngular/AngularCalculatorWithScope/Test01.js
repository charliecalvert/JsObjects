// specs code
describe("calculator", function() {'use strict';
	var addController = null;

	beforeEach(module('main'));
	
	beforeEach(inject(function($rootScope, $controller) {
		addController = $rootScope.$new();
		$controller('AddController', { $scope: addController }); 
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
});

