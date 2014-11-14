/**
 * @author Charlie Calvert
 */

var app = angular.module("main", []);

app.controller("InputArea", function($scope) {
	'use strict';
	$scope.visible = true;

	$scope.toggle = function() {
		$scope.visible = !$scope.visible;
	};
});