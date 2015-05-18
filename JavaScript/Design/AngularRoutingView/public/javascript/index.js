/**
 * Controller
 */
var myModule = angular.module("myModule", [ 'ngRoute' ]);

myModule.config(function($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl : "templates/Home.html",
		controller : "MyController"
	}).when('/presidents/:id', {
		templateUrl : "templates/Presidents.html",
		controller : "MyController"
	}).when('/scientists/:id', {
		templateUrl : "templates/Scientists.html",
		controller : "MyController"
	}).otherwise({
		redirectTo : '/'
	});
});

myModule.factory("simpleFactory", function($q) {
	"use strict";
	var factory = {};

	factory.getPresidents = function(fileName) {
		var defers = $q.defer();
		$.getJSON(fileName, function(json) {
			defers.resolve(json);
		}).fail(function(jqxhr, textStatus, error) {
			var err = textStatus + ", " + error;
			throw ("Request Failed: " + err);
		});
		return defers.promise;
	};

	return factory;
});

var myController = myModule.controller("MyController", function($scope, $routeParams, simpleFactory) {
	"use strict";

	function displayFullName(i) {
		return $scope.presidents[i].firstName +
			" "	+ $scope.presidents[i].lastName;
	}

	if($routeParams.id) {
		var promise = simpleFactory.getPresidents($routeParams.id);
		promise.then(function(json) {
			$scope.presidents = json;
			$scope.fullName = displayFullName(0);
		});
	}
});
