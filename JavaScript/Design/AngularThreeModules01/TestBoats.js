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
	
	it("SailBoat Description", inject(function(sailboat) {
		expect(sailboat.description).toEqual("I'm a sailboat.");		
	})); 
	
	it("Boat Description", inject(function(boat) {
		expect(boat.description).toEqual("I'm a boat.");
	}));


});

(function() {'use strict';
	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;

	var reporter = new jasmine.HtmlReporter();

	jasmineEnv.addReporter(reporter);

	jasmineEnv.specFilter = function(spec) {
		return reporter.specFilter(spec);
	};

	var currentWindowOnload = window.onload;

	window.onload = function() {
		if (currentWindowOnload) {
			currentWindowOnload();
		}
		execJasmine();
	};

	function execJasmine() {
		jasmineEnv.execute();
	}
})();
