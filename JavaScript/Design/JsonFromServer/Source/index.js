/**
 * @author Charlie Calvert
 */

angular.module('jsonServerMod', [])
.controller('myController', function($scope, $http) { 'use strict';

	$scope.hint = "<p>Start with a web server such as <strong>node server.js</strong> to retrieve JSON from Server</p>";
  
	$scope.loadJson = function() { 
	
		var getDataJson = $http.get('data.json');
	
		getDataJson.success(function(data, status, headers, config)  {
			$scope.data = data;
		});
		
		getDataJson.error(function(data, status, headers, config) {
			throw new Error('Oh no! An Error!');
		});
	};
	
	// Using dot syntax
	$scope.loadJson02 = function(fileName) {
		$http.get(fileName)
		.success(function(data, status, headers, config)  {
			$scope.data2 = data;
		})
		.error(function(data, status, headers, config) {
			throw new Error('Oh no! An Error!');
		});
	};
	
});