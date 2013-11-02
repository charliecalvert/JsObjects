/**
 * @author Charlie Calvert
 */


angular.module('elvenApp', ['pres'])
.controller('MyController', function($scope, $http, presidents) {
    $scope.hint = "<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>";
    
    // $scope.presidents = presidents;
    $scope.presidents = presidents.query({}, function(users){
      console.log($scope.presidents.length);
    });
	
	var getDataJson = $http.get('data.json');

	getDataJson.success(function(data, status, headers, config)  {
		$scope.data = data;
	});
	
	getDataJson.error(function(data, status, headers, config) {
		throw new Error('Oh no! An Error!');
	});

});

angular.module('pres', ['ngResource'])
.factory('presidents', function($resource) {
	console.log('Presidents factory called');
	var Presidents = $resource('https://api.mongolab.com/api/1/databases/elvenlab01/collections/Presidents/:id', {
      // apiKey:'4fb51e55e4b02e56a67b0b66',
      apiKey:'qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy',
      id:'@_id.$oid'
    });

    Presidents.prototype.getFirstName = function() {
      return this.presidentName;
    };

    return Presidents;
    
	/* var res =  $resource('https://api.monolab.com/api/1/databases/ascrum/collections/users/:id', {
		apiKey:'qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy',
		id:'#_id.$oid'
	});
	
	res.prototype.getFirstName = function() {
		return this.firstName;
	};
	return res; */ 
	// return { a: 2 };		
});
