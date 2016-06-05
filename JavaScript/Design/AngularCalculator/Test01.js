// specs code


describe("calculator", function() {'use strict';
	var addController = null;
	var bar;
	beforeEach(module('main'));
	
	beforeEach(inject(function($controller) {
		addController = $controller('AddController', { foo: bar });
	}));

	it("Sum two values", function() {
		console.log('Test01 loaded: ', addController.operandA);
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

