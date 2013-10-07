/**
 * @author Charlie Calvert
 */

function inputArea($scope) {
	$scope.visible = true;
	
	$scope.toggle = function() {
		$scope.visible = !$scope.visible;
	};
}