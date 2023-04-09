/**
 * Created by charlie on 6/3/16.
 */

var elfApp = angular.module('elfApp');

elfApp.controller('FirstController', function($scope, $http) {
    'use strict';

    $scope.description = 'First Controller Description';

    $scope.loadData = function() {
        $http.get('Presidents.json').then(function(presidents) {
            $scope.presidents = JSON.stringify(presidents, null, 4);
        });
    };

    $scope.loadData();
});

elfApp.directive('elfFirstDescription', function() {
    'use strict';
    return {
        controller: 'FirstController',
        templateUrl: 'first-controller'
    };
});

elfApp.directive('firstData', function() {
    'use strict';
    return {
        controller: 'FirstController',
        templateUrl: 'first-data'
    };
});
