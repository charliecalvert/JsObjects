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

queryController.statesBulk = function($q) {
	return runQuery("/insertBulk?fileName=States.json", $q);
}

queryController.statesOneDoc = function($q) {
	return runQuery("/insertFile?fileName=States.json&id=oneDoc", $q);
}

queryController.design = function($q) {
	return runQuery("/designDoc", $q);
}

queryController.viewBulk = function($q) {
	return runQuery("/viewBulk?designDoc=states&view=docBulk", $q);
}

queryController.readOne = function($q) {
	return runQuery("/read?docName=statesDoc", $q);
}

queryController.viewOneDoc = function($q) {
	return runQuery("viewOneDoc?designDoc=states&view=docStatesDoc", $q);
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
	}).when('/insertStatesBulk', {
		templateUrl : "templates/States.html",
		controller : "QueryController",
		resolve : {
			result : queryController.statesBulk
		}
	}).when('/insertStatesOneDoc', {
		templateUrl : "templates/States.html",
		controller : "QueryController",
		resolve : {
			result : queryController.statesOneDoc
		}
	}).when('/designDoc', {
		templateUrl : "templates/QueryView.html",
		controller : "QueryController",
		resolve : {
			result : queryController.design
		}
	}).when('/viewBulk', {
		templateUrl : "templates/QueryView.html",
		controller : "QueryController",
		resolve : {
			result : queryController.viewBulk
		}
	}).when('/readOne', {
		templateUrl : "templates/QueryView.html",
		controller : "QueryController",
		resolve : {
			result : queryController.readOne
		}
	}).when('/viewOneDoc', {
		templateUrl : "templates/QueryView.html",
		controller : "QueryController",
		resolve : {
			result : queryController.viewOneDoc
		}
	}).otherwise({
		redirectTo : '/'
	});
});

/* 
window.onload = function() {
   $.getJSON("/read?docName=3e82f91797ece19dcfa2285dde098e8e", function(result) {
	   console.log(result); 
   });
} */