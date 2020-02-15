/**
 * Created by charlie on 5/18/2015.
 */

var myModule = angular.module('myModule', ['ngRoute']);

// To understand :id, see index.js and search for routeParams
myModule.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/Home.html',
            controller: 'MyController'
        })
        .when('/presidents/:id', {
            templateUrl: 'templates/Presidents.html',
            controller: 'MyController'
        })
        .when('/scientists/:id', {
            templateUrl: 'templates/Scientists.html',
            controller: 'MyController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
