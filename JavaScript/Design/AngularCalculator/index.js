/**
 * @author Charlie Calvert
 */


//var app = angular.module('myApp', []);

/* Set up a simple controller with a few 
 * examples of common actions a controller function
 * might set up on a $scope. */
//app.controller('AddController', function($scope) {
function AddController($scope) {		
	$scope.operandA = 17000;
	$scope.operandB = 15000;

	$scope.func = function() {
		return $scope.operandA + $scope.operandB;
	};
}