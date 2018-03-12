angular.module('pres')
.factory('mlabSettings', function($http) {
    return new Promise(function(resolve, reject) {
        $http.get('/get-api-key')
            .then(function(response) {
                resolve({
                    url: 'https://api.mongolab.com/api/1/databases/elvenlab01/collections/Presidents/:id',
                    keyPart: {
                        apiKey: response.data.apiKey
                    }
                });
            });
    })
});