require 'ruble'

with_defaults :scope => "source.js" do |bundle| 

snippet "csc Jasmine Boilerplate" do |snip|
	snip.trigger = "cscJasmineBoilderPlate"
	snip.expansion = "(function() {'use strict';
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
"
end

snippet "csc Jasmine Describe Test" do |snip|
	snip.trigger = "cscJasmineDescribeTest"
	snip.expansion = "describe('calculator', function() {'use strict';
	var \\$myScope = null;
	var pc = null;
	
	beforeEach(inject(function(\\$rootScope, \\$controller) {
		\\$myScope = \\$rootScope.\\$new();
		pc = $controller('AddController', { \\$scope: \\$myScope }); 
	}));

	it('Sum two values', function() {
	    \\$myScope.operandA = 3;		
		expect(\\$myScope.square()).toEqual(9);
	});
});"
end

snippet "csc Angular Controller" do |snip|
	snip.trigger = "cscAngularController"
	snip.expansion = "function MyController(\\$scope) {
	\\$scope.visible = true;
	
	\\$scope.toggle = function() {
		\\$scope.visible = !\\$scope.visible;
	};
}"
end

end