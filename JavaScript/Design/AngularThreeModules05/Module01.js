/**
 * @author Charlie Calvert
 */

var app = angular.module('elvenApp', ['tools']);

app.controller('BoatController', function($scope, boat, sailboat) {
	'use strict';
	$scope.controllerBoat = "boat Controller";
	$scope.simpleBoat = boat.getDescription();
	$scope.sailboat = sailboat.getDescription();
	$scope.getNine = function() {
		return sailboat.getNine();
	};
});
