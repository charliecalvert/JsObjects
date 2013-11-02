Calculator
==========

The primary goal of this project is to help you understand
how to write unit tests for AngularJS using Jasmine.

Suppose we want to test this object:

```
function AddController($scope) {
	$scope.operandA = 17000;
	$scope.operandB = 15000;

	$scope.func = function() {
		return $scope.operandA + $scope.operandB;
	};
};
```

Step One: Create HTML
---------------------

Create an HTML file to host your tests and include the
following files:

```
  <link href="http://cdn.jsdelivr.net/jasmine/1.3.1/jasmine.css" type="text/css" rel="stylesheet">
  <script src="http://cdn.jsdelivr.net/jasmine/1.3.1/jasmine.js"></script>
  <script src="http://cdn.jsdelivr.net/jasmine/1.3.1/jasmine-html.js"></script>
  <script src="angular.js"></script>
  <script src="angular-mocks.js"></script>
  <script src="index.js"></script>
  <script src="Test01.js"></script>
```

The last two files are the one's we need to edit. 

- index.js: This contains the AddController object we want to test
- Test01.js: This is where we will write our tests

To see the complete file, look at [Test01.html](Test01.html)

Create Our Tests
----------------

There are two steps:

- Add the boilerplate (only needs to be done once)
- Add the test

###Add the boilerplate

In a separate file, called JasmineStart.js, add the following boilerplate code that initializes 
Jasmine and that rarely changes:

```
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
```

You can also put the boilerplate in a Script tag in your HTML,
but that breaks our rule about separating JavaScript from HTML
from CSS.

###Write your tests.

Also in Test01.js, write your tests:

```
describe("calculator", function() {'use strict';
	var addController = null;

	beforeEach(module('myApp'));
	
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


```

The key lines of code here are these, which create and
then initialize an instance of the object we want to test:

	addController = $rootScope.$new();
	pc = $controller('AddController', { $scope: addController });

Now we are free to write some tests:

	it("Sum two values", function() {
	    addController.operandA = 3;
		addController.operandB = 5;
		expect(addController.func()).toEqual(8);
	});

###Run Karma

To run the tests in karma, first ensure that you have installed 
the prerequisites:

	npm install

The above command processes **package.json**. In other words, the 
**config file** for **npm install** is called **package.json**.

Now type the following at the command line:

	karma start

Chrome should open and your tests should run. Go back to the 
command line to see if they failed or succeeded.
