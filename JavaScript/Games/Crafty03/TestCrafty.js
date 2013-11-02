/**
 * @author Charlie Calvert
 */

// specs code
describe("ElfController", function() {'use strict';
	var elfController = null;	
	
	beforeEach(function() {
		module('elfworld');	
	});
	
	beforeEach(inject(function($rootScope, $controller) {
		elfController = $rootScope.$new();		
		$controller('ElfController', { $scope: elfController, gameEventService: null});
	}));

	it("Check Name", function() {
		var actual = elfController.name;		
		expect(actual).toEqual('ElfPlayer');
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
