/**
 * @author Charlie Calvert
 */

/* global angular */

angular.module('elvenApp', ['pres'])
.controller('MyController', function($scope, $http, presidents) {
    $scope.hint = "<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>";
    
    // $scope.presidents = presidents;
    
    $scope.loadPresidents = function() {       
        $scope.presidents = presidents.query({}, function(presidents) {
            $scope.presidentsLength = presidents.length;
            console.log($scope.presidentsLength);
        });
    };
    
    
    $scope.newPresident = function() {
        var pres = new presidents({
            presidentName: $scope.presidentName,
            termStart: $scope.termStart,
            termEnd: $scope.termEnd
        });
        pres.$save(function(president, r) {
            $scope.presidents.push(president);
            $scope.presidentsLength = $scope.presidents.length;
        });
    };
    
    $scope.deleteRow = function() {
        var indexOfItemToDelete = $scope.indexOfItemToDelete;
        $scope.presidents[indexOfItemToDelete].remove(function(p, r) {
            $scope.presidents.splice(indexOfItemToDelete, 1);
            $scope.presidentsLength = $scope.presidents.length;
        });
    };
    
    $scope.updateRow = function() {
        var indexOfItemToUpdate = $scope.indexOfItemToDelete;
        $scope.presidents[indexOfItemToUpdate].presidentName = $scope.presidentName;
        $scope.presidents[indexOfItemToUpdate].updateMe(function(data) {            
            console.log("success: " + data);
        }, function(err) {
            console.log("Error Status: " + err.status + ' ' + err.data.message);
        });  
    };
});

angular.module('pres', ['ngResource'])
.factory('presidents', function($resource) {
	console.log('Presidents factory called');
	var Presidents = $resource('https://api.mongolab.com/api/1/databases/elvenlab01/collections/Foo/:id', {      
      apiKey:'qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy',      
    },
    {
        update: {method:'PUT'}
    });

    Presidents.prototype.updateMe = function (callback, errorCallback) {
        console.log("update called");
        return Presidents.update(
            {id:this._id.$oid}, 
            angular.extend({}, this, {_id:undefined}), 
            callback, 
            errorCallback);
    };
    
    Presidents.prototype.getPresidentName = function() {
      return this.presidentName;
    };
    
    Presidents.prototype.getTermStart = function() {
    	return this.termStart;
    };
    
    Presidents.prototype.getTermEnd = function() {
    	return this.termEnd;
    };

    Presidents.prototype.remove = function (cb, errorcb) {
      return Presidents.remove({id:this._id.$oid}, cb, errorcb);
    };

    Presidents.prototype['delete'] = function (cb, errorcb) {
      return this.remove(cb, errorcb);
    };
    
    return Presidents; 
			
});
