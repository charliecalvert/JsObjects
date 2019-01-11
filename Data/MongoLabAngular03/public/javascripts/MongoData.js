/**
 * @author Charlie Calvert
 */

/* global angular */

angular
    .module('elvenApp', ['pres'])
    .controller('MyController', function($scope, $http, presidents) {
        $scope.hint =
            '<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>';

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
                // if (indexOfItemToDelete < $scope.presidents.length) {}
                $scope.presidents[indexOfItemToDelete].remove(
                    function(deletedObject, headers) {
                        $scope.presidents.splice(indexOfItemToDelete, 1);
                        $scope.presidentsLength = $scope.presidents.length;
                    },
                    function(err) {
                        console.log('error: ' + err.data.message);
                    }
                );
            };

            $scope.updateRow = function() {
                var indexOfItemToUpdate = $scope.indexOfItemToDelete;
                $scope.presidents[indexOfItemToUpdate].presidentName =
                    $scope.presidentName;
                $scope.presidents[indexOfItemToUpdate].termStart =
                    $scope.termStart;
                $scope.presidents[indexOfItemToUpdate].termEnd = $scope.termEnd;
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

            $scope.indexChange = function() {
                $scope.presidentName =
                    $scope.presidents[$scope.indexOfItemToDelete].presidentName;
                $scope.termStart =
                    $scope.presidents[$scope.indexOfItemToDelete].termStart;
                $scope.termEnd =
                    $scope.presidents[$scope.indexOfItemToDelete].termEnd;
            };
        });
    });
