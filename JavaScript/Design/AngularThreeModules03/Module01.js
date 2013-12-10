/**
 * @author Charlie Calvert
 */

angular.module('elvenApp', ['tools'])
.controller('BoatController', function($scope, boat, sailboat) { 'use strict';
	$scope.simple = "Simple Boat";
	$scope.boatType = boat.description;
	$scope.sailBoat = sailboat.description;
	$scope.getNine = function() {
		return sailboat.getNine();
	};
});
