/**
 * @author Charlie Calvert
 */

angular.module('AngularUIControl', []);

.controller('TextAreaController', function($scope) {
	var MAX_CHARS = 25;
	var WARN_COUNT = MAX_CHARS - 10;
	
	$scope.message = "";
	
	$scope.send = function() {
		alert("Send");
	};
	
	$scope.clear = function() {
		alert("Clear");
	};	
	
	$scope.remaining = function() {
		return MAX_CHARS - $scope.message.length;
	};
	
	$scope.disabled = function() {
		return $scope.message.length > MAX_CHARS;
	};
	
	$scope.warning = function() {
		return $scope.message.length > WARN_COUNT;
	};
}
