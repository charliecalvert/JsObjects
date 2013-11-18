/**
 * @author Charlie Calvert
 */

function MyController($scope, $http) {
    
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
}