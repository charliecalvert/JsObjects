'use strict';

/**
 * @ngdoc function
 * @name simpleHttpBackendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpleHttpBackendApp
 */
angular.module('simpleHttpBackendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
