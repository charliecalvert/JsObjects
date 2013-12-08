/**
 * @author Charlie Calvert
 */

angular.module('elfApp', [])
.controller('FragmentController', function($scope) { 'use strict';
	var fragment01 = 'Fragment01.html';
	var fragment02 = 'Fragment02.html';

	$scope.hint = "TestMe";

	$scope.fragments = [
		{ name: fragment01, url: fragment01},
		{ name: fragment02, url: fragment02}
	];

	$scope.fragment = $scope.fragments[0];
});
