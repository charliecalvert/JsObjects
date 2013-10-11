// specs code
describe("calculator", function() {'use strict';
	var $mockScope = null;
	var pc = null;
	
	beforeEach(inject(function($rootScope, $controller) {
		$mockScope = $rootScope.$new();
		pc = $controller('AddController', { $scope: $mockScope }); 
	}));
	
	it("Sum two values", function() {
	    $mockScope.operandA = 3;
		$mockScope.operandB = 5;
		expect($mockScope.func()).toEqual(8);
	});

    it("Sum two other values", function() {
        $mockScope.operandA = 2;
        $mockScope.operandB = 9;
        expect($mockScope.func()).toEqual(11);
    });

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
