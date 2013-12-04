/**
 * @author Charlie Calvert
 */


/* Set up a simple controller  */
var app = angular.module('myApp', [])
.controller('AddController', function($scope) { 'use strict';

	$scope.operandA = 17000;
	$scope.operandB = 15000;

	$scope.func = function() {
		return $scope.operandA + $scope.operandB;
	};
	
});