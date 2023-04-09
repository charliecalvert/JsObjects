/**
 * Controller
 */
var myModule = angular.module('myModule', ['ngRoute']);

var myController = myModule.controller('MyController', function(
    $scope,
    bar,
    foo
) {
    'use strict';

    $scope.customers = bar;

    function displayFullName(i) {
        return (
            $scope.customers[i].firstName + ' ' + $scope.customers[i].lastName
        );
    }

    $scope.fullName = displayFullName(0);
});

myController.customer = function($q) {
    var defers = $q.defer();
    $.getJSON('../javascript/Presidents.json', function(json) {
        defers.resolve(json);
    }).fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ', ' + error;
        throw 'Request Failed: ' + err;
    });
    return defers.promise;
};

myController.foo = function($q) {
    var defers = $q.defer();
    $.getJSON('../javascript/Presidents02.json', function(json) {
        defers.resolve(json);
    }).fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ', ' + error;
        throw 'Request Failed: ' + err;
    });
    return defers.promise;
};

myModule.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/View01.html',
            controller: 'MyController',
            resolve: {
                bar: myController.customer,
                foo: myController.foo
            }
        })
        .when('/view02', {
            templateUrl: 'templates/View02.html',
            controller: 'MyController',
            resolve: {
                bar: myController.customer,
                foo: myController.foo
            }
        })
        .otherwise({
            redirectTo: '/'
        });
});
