angular.module('pres')
.factory('mlabSettings', function($http) {

    function getKeys() {
        return $http.get('/get-api-key')
            .then(function(response) {
                console.log(response.data.apiKey);
                //$scope.data = response.data;
            });
    }

    return {
        getKeys: function(callback) {
            return new Promise(function(resolve, reject) {

                $http.get('/get-api-key')
                .then(function(response) {
                    console.log(response.data.apiKey);
                    //$scope.data = response.data;
                    resolve({
                        url: 'https://api.mongolab.com/api/1/databases/elvenlab01/collections/Presidents/:id',
                        keyPart: {
                            apiKey: response.data.apiKey
                        }
                    });
                });
            })
        }
    }
});