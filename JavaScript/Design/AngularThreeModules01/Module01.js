/**
 * @author Charlie Calvert
 */

angular.module('elvenApp', ['boat', 'sailboat']);

angular.module('boat', [])
.factory('boat', function() {
	return {
		description : "I'm a boat."
	};
});

angular.module('sailboat', [])
.factory('sailboat', function() {
	return {
		description: "I'm a sailboat"		
	};
});

function BoatController($scope, boat, sailboat) {
	$scope.simple = "Simple Boat";
	$scope.boatType = boat.description;
	$scope.sailBoat = sailboat.description;
}
