/**
 * Created by charlie on 4/24/16.
 */

var elfApp = angular.module("elfApp", []);

elfApp.controller('MainController', function($scope) {
    'use strict';
    var mainController = this;
    mainController.mainData = "Main Data";
    $scope.scopeData = "Scope Data";
});

elfApp.directive('truck', function() {
    'use strict';
    return {
        template: '<h1>Truck Luck</h1>'
    };
});

elfApp.directive('car', function() {
    'use strict';
    return {
        templateUrl: 'car'
    };
});

elfApp.directive('firstDirective', function() {
    'use strict';
    return function(scope, elem){
        elem.append('<span>This span is appended from directive.</span>');
    };
});