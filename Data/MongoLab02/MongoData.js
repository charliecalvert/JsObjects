/**
 * @author Charlie Calvert
 */

/* global angular */

angular.module('elvenApp', ['pres'])
.controller('MyController', function($scope, $http, presidents) {
    $scope.hint = "<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>";
    
    // $scope.presidents = presidents;
    $scope.presidents = presidents.query({}, function(presidents) {
      $scope.presidentsLength = $scope.presidents.length;
      console.log($scope.presidentsLength);
    });
    
    var refresh = function() {
        $scope.presidents = presidents.query({}, function(presidents) {});
    };
    
    $scope.newPresident = function() {
        var pres = new presidents({
            presidentName: $scope.presidentName,
            termStart: $scope.termStart,
            termEnd: $scope.termEnd
        });
        pres.$save(function(p, r) {
            $scope.presidents.push(p);
        });
    };
    
    $scope.deleteRow = function() {
        var indexOfItemToDelete = $scope.indexOfItemToDelete;
        $scope.presidents[indexOfItemToDelete].$delete(function(p, r) {
            $scope.presidents.splice(indexOfItemToDelete, 1);
        });
    };
});

angular.module('pres', ['ngResource'])
.factory('presidents', function($resource) {
	console.log('Presidents factory called');
	var Presidents = $resource('https://api.mongolab.com/api/1/databases/elvenlab01/collections/Foo/:id', {
      // apiKey:'4fb51e55e4b02e56a67b0b66',
      apiKey:'qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy',
      id:'@_id.$oid'
    });

    Presidents.prototype.getPresidentName = function() {
      return this.presidentName;
    };
    
    Presidents.prototype.getTermStart = function() {
    	return this.termStart;
    };
    
    Presidents.prototype.getTermEnd = function() {
    	return this.termEnd;
    };

    return Presidents;    
	 
	// return { a: 2 };		
});
