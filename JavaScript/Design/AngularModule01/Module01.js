/**
 * @author Charlie Calvert
 * @see AngularThreeModules01
 */

(function() {
	
	var app = angular.module('elvenApp', []);

	app.factory('boat', function() {
		'use strict';
		return {
			description : "I'm a simple boat."
		};
	});

	app.factory('sailboat', function() {
		'use strict';
		return {
			description : "I'm a sailboat."
		};
	});

	app.controller('BoatController', function($scope, boat, sailboat) {
		'use strict';

		var boatControl = this;
		boatControl.simple = "Simple Boat";
		boatControl.boat = boat.description;
		boatControl.sailBoat = sailboat.description;
		$scope.test = "My Test";
	});


})();