/**
 * @author Charlie
 */

function MyController($scope) {
    'use strict';
    $scope.hint = 'This is my hint';

    $scope.miles = 0;

    $scope.convertMilesToFeet = function() {
        return $scope.miles * 5280;
    };
}
