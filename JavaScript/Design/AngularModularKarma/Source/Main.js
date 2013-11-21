 /**
 * @author Charlie Calvert
 */

 /* jshint devel: true */

angular.module('mainModule', ['eightModule', 'nineModule', 'tenModule'])
.controller('mainController', function($scope, $injector, eightFactory, tenFactory) { 'use strict';

	//Alternative way to get factory
	var nineFactory = $injector.get('nineFactory');

	$scope.name = "mainController";

	$scope.add = function(a, b) {
		return a + b;  
	};

	$scope.getTen = tenFactory.getTen();
	
	$scope.getEight = eightFactory.getEight();

	$scope.getNine = nineFactory.getNine();
	
	
});



