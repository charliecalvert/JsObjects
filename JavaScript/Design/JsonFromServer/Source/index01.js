/**
 * @author Charlie Calvert
 */

function MyController($scope, $http) { 'use strict';

	$scope.hint = "<p>Start with a web server such as <strong>node server.js</strong> to retrieve JSON from Server</p>";
  
	$scope.loadJson = function() {
		$http.get('data.json')
		.success(function(data, status, headers, config)  {
			$scope.data = data;
		})
		.error(function(data, status, headers, config) {
			throw new Error('Oh no! An Error!');
		});
	};
}