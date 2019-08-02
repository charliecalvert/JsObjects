/**
 * Controller
 */
var myModule = angular.module("myModule", [ 'ngRoute' ]);



myModule.factory("simpleFactory", function($q) {
	"use strict";
	var factory = {};

	factory.getCustomers = function() {
		var defers = $q.defer();
		$.getJSON("../javascript/Presidents.json", function(json) {
			defers.resolve(json);
		}).fail(function(jqxhr, textStatus, error) {
			var err = textStatus + ", " + error;
			throw ("Request Failed: " + err);
		});
		return defers.promise;
	};

	return factory;

});

var myController = myModule.controller("MyController", function($scope,
		customer) {
	"use strict";

	/*var promise = simpleFactory.getCustomers();
	promise.then(function(greeting) {
		$scope.customers = greeting;
	}); */

	function displayFullname(i) {
		return $scope.customers[i].firstName + " " +
            $scope.customers[i].lastName;
	}

});

myController.customer = function($q) {
	// see:
	// https://groups.google.com/forum/?fromgroups=#!topic/angular/DGf7yyD4Oc4
	var defers = $q.defer();
	$.getJSON("../javascript/Presidents.json", function(json) {
		defers.resolve(json);
	}).fail(function(jqxhr, textStatus, error) {
		var err = textStatus + ", " + error;
		throw ("Request Failed: " + err);
	});
	return defers.promise;
};

myModule.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "partials/View02.html",
		controller : "MyController",
		resolve : {
			customer : myController.customer
		}
	}).when('/view02', {
		templateUrl : "partials/View02.html",
		controller : "MyController"
	// resolve : "MyController.resolve"
	}).otherwise({
		redirectTo : '/'
	});
});
