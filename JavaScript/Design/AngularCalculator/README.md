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