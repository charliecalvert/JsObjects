/**
 * @author Charlie Calvert
 */


var app = angular.module('myApp', []);

/* Set up a simple controller with a few  */
app.controller('AddController', function($scope) {
// function AddController($scope) {
	$scope.operandA = 17000;
	$scope.operandB = 15000;

	$scope.func = function() {
		return $scope.operandA + $scope.operandB;
	};
});