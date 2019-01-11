/**
 * @author Charlie Calvert
 */

/* global angular */

angular
    .module('elvenApp', ['pres'])
    .controller('MyController', function($scope, $http, presidents) {
        $scope.hint =
            '<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>';

        // $scope.presidents = presidents;

        presidents.then(function(presidents) {
            $scope.loadPresidents = function() {
                $scope.presidents = presidents.query({}, function(presidents) {
                    $scope.presidentsLength = presidents.length;
                    console.log($scope.presidentsLength);
                });
            };

            $scope.newPresident = function() {
                var pres = new presidents({
                    presidentName: $scope.presidentName,
                    termStart: $scope.termStart,
                    termEnd: $scope.termEnd
                });
                pres.$save(function(president, r) {
                    $scope.presidents.push(president);
                    $scope.presidentsLength = $scope.presidents.length;
                });
            };

            $scope.deleteRow = function() {
                var indexOfItemToDelete = $scope.indexOfItemToDelete;
                $scope.presidents[indexOfItemToDelete].remove(function(p, r) {
                    $scope.presidents.splice(indexOfItemToDelete, 1);
                    $scope.presidentsLength = $scope.presidents.length;
                });
            };

            $scope.updateRow = function() {
                var indexOfItemToUpdate = $scope.indexOfItemToDelete;
                $scope.presidents[indexOfItemToUpdate].presidentName =
                    $scope.presidentName;
                $scope.presidents[indexOfItemToUpdate].updateMe(
                    function(data) {
                        console.log('success: ' + data);
                    },
                    function(err) {
                        console.log(
                            'Error Status: ' +
                                err.status +
                                ' ' +
                                err.data.message
                        );
                    }
                );
            };
        });
    });
