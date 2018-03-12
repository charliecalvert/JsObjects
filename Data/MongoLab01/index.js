/**
 * @author Charlie Calvert
 */


angular.module('elvenApp', ['pres'])
.controller('MyController', function($scope, $http, presidents) {
    $scope.hint = "<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>";
    
    
    $scope.loadMongoData = function() {    
        $scope.presidents = presidents.query({}, function(users) {
          $scope.presidentsLength = $scope.presidents.length;
          console.log($scope.presidentsLength);
        });
    };
	
	$scope.loadJson = function() {	
    	var getDataJson = $http.get('data.json');
    
    	getDataJson.success(function(data, status, headers, config)  {
    		$scope.data = data;
    	});
    	
    	getDataJson.error(function(data, status, headers, config) {
    		throw new Error('Oh no! An Error!');
    	});
	};
	
	$scope.loadAll = function() {
	    $scope.loadMongoData();
	    $scope.loadJson();
	};	

});

angular.module('pres', ['ngResource'])
.factory('presidents', function($resource, mlabSettings) {
	console.log('Presidents factory called: ', mlabSettings);
	var Presidents = $resource(mlabSettings.url, mlabSettings.keyPart);

    Presidents.prototype.getPresidentName = function() {
      return this.presidentName;
    };
    
    Presidents.prototype.getTermStart = function() {
    	return this.termStart;
    };

    return Presidents;    
	 
	// return { a: 2 };		
});
