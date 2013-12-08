/**
 * @author Charlie Calvert
 */

angular.module('elvenApp', ['tools']);

function BoatController($scope, boat, sailboat) { 'use strict';
	$scope.simple = "Simple Boat";
	$scope.boatType = boat.getDescription();
	$scope.sailBoat = sailboat.getDescription();
	$scope.getNine = function() {
		return sailboat.getNine();
	};
}
