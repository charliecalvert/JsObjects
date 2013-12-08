/**
 * @author Charlie Calvert
 */

function inputArea($scope) { 'use strict';
	$scope.visible = true;
	
	$scope.toggle = function() {
		$scope.visible = !$scope.visible;
	};
}