angular.module('customResourceDemo', ['mongoMod'])
    .constant('CONFIG', {
        DB_NAME: 'elvenlab01',
        MONGO_URL: 'https://api.mongolab.com/api/1/databases/',
        API_KEY: 'duUXXd0giOpJM-Fqyk9hP2_PDeQV7SRT'
    })
    .factory('presidents', function(mongolabResource) {
        return mongolabResource('Presidents');
    })
    .controller('CustomResourceCtrl', function($scope, presidents) {

        function showPresidents() {
            presidents.query().then(function(presidentData) {
                $scope.presidents = presidentData;
            });
        }

        $scope.addPresident = function() {
            var pres = {
                presidentName: 'John Quincy Adames',
                termStart: 1825,
                termEnd: 1829
            };
            new presidents(pres)
                .save(function(president, $scope) {
                    showPresidents();
                })
        };

        $scope.deletePresident = function() {
            var indexOfItemToDelete = 5;
            $scope.presidents[indexOfItemToDelete].remove(function(deletedObject, headers) {
                showPresidents();
            }, function(err) {
                console.log("error: " + err.data.message);
            });

        };

        showPresidents();
    });

