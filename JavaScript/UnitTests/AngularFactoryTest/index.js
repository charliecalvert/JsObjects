/**
 * @author Charlie Calvert
 */


var app = angular.module('myApp', ['circleMod', 'triangleMod']);

/* Set up a simple controller with a few  */
app.controller('AddController', function($scope, triangleFactory, circleFactory) {
// function AddController($scope) {
	$scope.operandA = 17000;
	$scope.operandB = 15000;

	$scope.func = function() {
		return $scope.operandA + $scope.operandB;
	};
	
	$scope.triangle = triangleFactory.pythagoras(3);
	
	$scope.circle01 = circleFactory.circumferenceOfCircle(2);
	
	$scope.circle02 = circleFactory.areaOfCircle(3);
});