/**
 * @author Charlie Calvert
 */

angular.module('elvenApp', ['t', 'sailboat']);

function BoatController($scope, boat, sailboat) {
	$scope.simple = "Simple Boat";
	$scope.boatType = boat.description;
	$scope.sailBoat = sailboat.description;
	$scope.getNine = function() {
		return sailboat.getNine();
	};
}
