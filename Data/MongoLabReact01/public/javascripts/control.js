/**
 * @author Charlie Calvert
 */

angular
    .module('elvenApp', ['pres'])
    .controller('MyController', function($scope, $http, presidents) {
        $scope.hint =
            '<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>';

        presidents.then(function(presidents) {
            $scope.loadMongoData = function() {
                $scope.presidents = presidents.query({}, function(users) {
                    $scope.presidentsLength = $scope.presidents.length;
                    console.log($scope.presidentsLength);
                });
            };

            $scope.loadJson = function() {
                var collectionUrl = 'data.json';
                return $http.get(collectionUrl).then(function(response) {
                    console.log(response);
                    $scope.data = response.data;
                });
            };

            $scope.loadAll = function() {
                $scope.loadMongoData();
                $scope.loadJson();
            };
        });
    });

angular
    .module('pres', ['ngResource'])
    .factory('presidents', function($resource, mlabSettings) {
        console.log('Presidents factory called: ', mlabSettings);
        return new Promise(function(resolve, reject) {
            mlabSettings.then(function(response) {
                var Presidents = $resource(response.url, response.keyPart);

                Presidents.prototype.getPresidentName = function() {
                    return this.presidentName;
                };

                Presidents.prototype.getTermStart = function() {
                    return this.termStart;
                };

                resolve(Presidents);
            });
        });
    });
