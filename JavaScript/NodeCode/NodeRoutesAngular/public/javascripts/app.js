/**
 * Created by charlie on 5/30/2015.
 */

var myModule = angular.module("elvenApp", [ 'ngRoute' ]);

myModule.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        controller : "MyController",
        controllerAs: "myController"
    }).when("/root", {
        templateUrl: "root",
        controller: "MyController",
        resolve: {
            message: function() {
                return "root";
            }
        }
    }).when('/simple', {
        templateUrl : "simple",
        controller : "SimpleController"
    }).when('/simple-user', {
        templateUrl : "simple-user",
        controller : "SimpleUser"
    }).otherwise({
        redirectTo : '/'
    });
});
