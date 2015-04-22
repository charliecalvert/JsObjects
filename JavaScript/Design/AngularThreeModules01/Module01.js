/**
 * @author Charlie Calvert
 */

(function() {
	
	var app = angular.module('elvenApp', [ 'boat', 'sailboat' ])

	app.controller('BoatController', function($scope, boat, sailboat) {
		'use strict';

		var boatControl = this;
		boatControl.simple = "Simple Boat";
		boatControl.boat = boat.description;
		boatControl.sailBoat = sailboat.description;
		$scope.test = "My Test";
	});

	angular.module('boat', []).factory('boat', function() {
		'use strict';
		return {
			description : "I'm a simple boat."
		};
	});

	angular.module('sailboat', []).factory('sailboat', function() {
		'use strict';
		return {
			description : "I'm a sailboat."
		};
	});

})();