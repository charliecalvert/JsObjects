/**
 * @author Charlie Calvert
 */

angular.module('elvenApp', ['boat', 'sailboat'])
.controller('BoatController', function($scope, boat, sailboat) {
    $scope.simple = "Simple Boat";
    $scope.boatType = boat.description;
    $scope.sailBoat = sailboat.description;
});


angular.module('boat', [])
.factory('boat', function() {
	return {
		description : "I'm a boat."
	};
});

angular.module('sailboat', [])
.factory('sailboat', function() {
	return {
		description: "I'm a sailboat."		
	};
});

