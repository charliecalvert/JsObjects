/**
 * Controller
 */
var myModule = angular.module('myModule', ['ngRoute']);

myModule.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/View01.html',
            controller: 'MyController'
        })
        .when('/view02', {
            templateUrl: 'templates/View02.html',
            controller: 'MyController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

myModule.factory('simpleFactory', function($q) {
    'use strict';
    var factory = {};

    factory.getCustomers = function() {
        var defers = $q.defer();
        $.getJSON('../javascript/Presidents.json', function(json) {
            defers.resolve(json);
        }).fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ', ' + error;
            throw 'Request Failed: ' + err;
        });
        return defers.promise;
    };

    return factory;
});

var myController = myModule.controller('MyController', function(
    $scope,
    simpleFactory
) {
    'use strict';

    function displayFullName(i) {
        return (
            $scope.customers[i].firstName + ' ' + $scope.customers[i].lastName
        );
    }

    var promise = simpleFactory.getCustomers();
    promise.then(function(json) {
        $scope.customers = json;
        $scope.fullName = displayFullName(0);
    });
});
