/**
 * @author Charlie Calvert
 */

angular.module('elvenApp', ['tools'])
.controller('BoatController', function(boat, sailboat) { 'use strict';
	var vm = this;
	vm.controllerBoat = "Controller Boat";
	vm.simpleBoat = boat.description;
	vm.sailboat = sailboat.description;
	vm.getNine = function() {
		return sailboat.getNine();
	};
});
