'use strict';

/**
 * @ngdoc function
 * @name simpleHttpBackendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleHttpBackendApp
 */
angular.module('simpleHttpBackendApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.values = [];

    $scope.url = 'Scientists.json'

    $scope.getJson = function() {
      console.log("JSON");
      var response = $http.get($scope.url);
      response.success(function(scientists) {
        for (var i = 0; i < scientists.length; i++) {
          $scope.values.push(scientists[i].firstName + ' ' + scientists[i].lastName);
        }
      })
    }
  });
