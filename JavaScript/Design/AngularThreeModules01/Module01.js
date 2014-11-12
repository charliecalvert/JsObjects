/**
 * @author Charlie Calvert
 */

(function() {
	
	var app = angular.module('elvenApp', [ 'boat', 'sailboat' ])

	app.controller('BoatController', function($scope, boat, sailboat) {
		'use strict';
		$scope.simple = "Simple Boat";
		$scope.boat = boat.description + ' property.';
		$scope.sailBoat = sailboat.description;
	});

	angular.module('boat', []).factory('boat', function() {
		'use strict';
		return {
			description : "I'm a simple boat"
		};
	});

	angular.module('sailboat', []).factory('sailboat', function() {
		'use strict';
		return {
			description : "I'm a sailboat."
		};
	});

})();