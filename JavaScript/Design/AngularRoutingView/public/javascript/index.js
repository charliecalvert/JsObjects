/**
 * Controller
 */
var myModule = angular.module("myModule", [ 'ngRoute' ]);

myModule.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "partials/View02.html",
		controller : "MyController",
		resolve: {
			customer: myController.customer
		}

	}).when('/view02', {
		templateUrl : "partials/View02.html",
		controller : "MyController"
		//resolve : "MyController.resolve"
	}).otherwise({
		redirectTo : '/'
	});
});

myModule.factory("simpleFactory", function() {
	"use strict";
	var factory = {};
	var customers;

	$.getJSON("../javascript/Customer.json", function(json) {
		customers = json;
	});

	factory.getCustomers = function() {
		return customers;
	};

	return factory;

});

var myController = myModule.controller("MyController", function($scope,
		simpleFactory, customer) {
	"use strict";
	$scope.customers = simpleFactory.getCustomers();

	$scope.addCustomer = function() {
		$scope.customers.push({
			name : {
				firstName : $scope.newCustomer.name.substr(0,
						$scope.newCustomer.name.indexOf(" ")),
				lastName : $scope.newCustomer.name
						.substr($scope.newCustomer.name.indexOf(' ') + 1),
			},
			city : $scope.newCustomer.city
		});
		$scope.newCustomer.name = "";
		$scope.newCustomer.city = "";
	};

	function displayFullname(i) {
		return $scope.customers[i].name.firstName + " " +
            $scope.customers[i].name.lastName;
	}

});

myController.customer = function($q) {
		// see:
		// https://groups.google.com/forum/?fromgroups=#!topic/angular/DGf7yyD4Oc4
		var defers = $q.defer();
		$.getJSON("../javascript/Customer.json", function(json) {
			defers.resolve(json);
		});
		return defers.promise;
};
