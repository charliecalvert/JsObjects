/**
 * @author Charlie Calvert
 */

var app = angular.module('ElvenApp', []);

app.directive('show', function($scope) {
	$scope.visible = true;
	
	$scope.toggle = function() {
		$scope.visible = !$scope.visible;
	};
});