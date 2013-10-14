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

