/**
 * @author Charlie Calvert
 * @see AngularModules01
 * @description: Here we create three modules:
 * 		One module has a controller and depends on two factories
 * 	    One module has a boat factory
 * 	    One module has a sailboat factory
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