/**
 * Created by charlie on 4/24/16.
 */

var elfApp = angular.module('elfApp', []);

elfApp.controller('MainController', function($scope) {
    'use strict';
    var mainController = this;
    mainController.mainData = 'Main Data';
    $scope.scopeData = 'Scope Data';
});

elfApp.directive('car', function() {
    'use strict';
    return {
        templateUrl: 'car',
        controller: 'MainController',
        controllerAs: 'mainController'
    };
});

elfApp.directive('spanDirective', function() {
    'use strict';
    return function(scope, elem) {
        elem.append('<span>There is a span in this directive.</span>');
    };
});
