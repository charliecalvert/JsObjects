var elfApp = angular.module('elfApp');

elfApp.controller('HomeController', function($scope) {
    'use strict';

    $scope.description = 'HomeController Data';
});

elfApp.directive('elfHomeDescription', function() {
    'use strict';
    return {
        controller: 'HomeController',
        templateUrl: 'home-description'
    };
});
