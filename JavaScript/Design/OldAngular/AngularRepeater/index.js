/**
 * @author Charlie Calvert
 */

var PersonController = function($scope) {
    'use strict';
    $scope.people = [
        { firstName: 'George', lastName: 'Washington', sequence: 1 },
        { firstName: 'John', lastName: 'Adams', sequence: 2 },
        { firstName: 'Thomas', lastName: 'Jefferson', sequence: 3 },
        { firstName: 'James', lastName: 'Madison', sequence: 4 }
    ];
};
