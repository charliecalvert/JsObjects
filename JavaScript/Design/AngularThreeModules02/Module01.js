/**
 * @author Charlie Calvert
 */

var elvenApp = angular.module('elvenApp', ['boat', 'sailboat']);

elvenApp.controller('BoatController', function($scope, boat, sailboat) { 'use strict';
	var vm = this;
	vm.controllerBoat = "Controller Boat";
	vm.boat = boat.description;
	vm.sailboat = sailboat.description;
	$scope.getNine = function() {
		return sailboat.getNine();
	};
	$scope.test = "My Test";
});
