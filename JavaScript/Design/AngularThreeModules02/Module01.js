/**
 * @author Charlie Calvert
 */

var elvenApp = angular.module('elvenApp', ['boat', 'sailboat']);

elvenApp.controller('BoatController', function($scope, boat, sailboat) {
	$scope.simple = "Simple Boat";
	$scope.boatType = boat.description;
	$scope.sailBoat = sailboat.description;
	$scope.getNine = function() {
		return sailboat.getNine();
	};
});
