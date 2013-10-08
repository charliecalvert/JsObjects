// specs code
describe("calculator", function() {'use strict';
	var $scope = null;
	var pc = null;
	
	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		pc = $controller('AddController', { $scope: $scope }); 
	}));
	
	it("Sum two values", function() {
		$scope.operandA = 3;
		$scope.operandB = 5;
		expect($scope.func()).toEqual(8);
	});

    it("Sum two other values", function() {
        $scope.operandA = 2;
        $scope.operandB = 9;
        expect($scope.func()).toEqual(11);
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
