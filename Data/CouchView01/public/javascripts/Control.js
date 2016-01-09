/**
 * @name: Control
 */

var myModule = angular.module("myModule", [ 'ngRoute' ]);

var queryController = myModule.controller("QueryController", 
	function($scope, result) {
	
	$scope.result = result;
});

function runQuery(query, $q) {
	"use strict";
	var defers = $q.defer();
	$.getJSON(query, function(json) {
		defers.resolve(json);
	}).fail(function(jqxhr, textStatus, error) {
		var err = textStatus + ", " + error;
		defers.resolve ({ "Request Failed" : err });
	});
	return defers.promise;
}

queryController.delete = function($q) {
	"use strict";
	return runQuery('/deleteDb', $q);
}

queryController.create = function($q) {
	"use strict";
	return runQuery('/createDb', $q);
}

queryController.states = function($q) {
	return runQuery("/insertBulk?fileName=states.json", $q);
}

queryController.design = function($q) {
	return runQuery("/designDoc", $q);
}

var nameController = myModule.controller("NameController", function($scope, databaseName, allDbs) {
	"use strict";
	$scope.databaseName = databaseName;
	$scope.allDbs = allDbs;
});

nameController.databaseName = function($q) {
	"use strict";
	return runQuery("/databaseName", $q);
};

nameController.allDbs = function($q) {
	"use strict";
	return runQuery("/listDb", $q);
};

myModule.config(function($routeProvider) {
	$routeProvider.when("/databaseName", {
		templateUrl : "templates/DatabaseNames.html",
		controller : "NameController",
		resolve : {
			databaseName : nameController.databaseName,
			allDbs: nameController.allDbs
		}
	}).when('/deleteDb', {
		templateUrl : "templates/QueryView.html",
		controller : "QueryController",
		resolve : {
			result : queryController.delete
		}
	}).when('/createDb', {
		templateUrl : "templates/QueryView.html",
		controller : "QueryController",
		resolve : {
			result : queryController.create
		}
	}).when('/insertStates', {
		templateUrl : "templates/States.html",
		controller : "QueryController",
		resolve : {
			result : queryController.states
		}
	}).when('/designDoc', {
		templateUrl : "templates/QueryView.html",
		controller : "QueryController",
		resolve : {
			result : queryController.design
		}
	}).otherwise({
		redirectTo : '/'
	});
});
