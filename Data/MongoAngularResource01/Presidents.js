angular.module('mongoMod', [])

    .factory('mongolabResource', function($http, CONFIG) {

        return function(collectionName) {

            //basic configuration
            var collectionUrl =
                CONFIG.MONGO_URL +
                CONFIG.DB_NAME + '/collections/' + collectionName;

            var defaultParams = {
                apiKey: CONFIG.API_KEY
            };

            // Constructor: Called by Resource.query.
            // angular.extend is a utility for auto-creating properties.
            // It merges exampleRecord into our factory object. But
            // exampleRecord doesn't have to be a President, it can be
            // any arbitrary JavaScript data in object form.
            // See MongoHttp02 for an example.
            function Resource(exampleRecord) {
                angular.extend(this, exampleRecord);
            }

            Resource.query = function(params) {
                return $http.get(collectionUrl, {
                    params: angular.extend({
                        q: JSON.stringify(params || {})
                    }, defaultParams)
                }).then(function(response) {
                    var result = [];
                    angular.forEach(response.data, function(value, key) {
                        result[key] = new Resource(value);
                    });
                    return result;
                });
            };

            Resource.prototype.save = function(callback) {
                return $http.post(collectionUrl, this, {
                        params: defaultParams
                    })
                    .then(function(response) {
                        callback();
                    });
            };

            Resource.prototype.remove = function(callback) {
                return $http['delete'](collectionUrl + '/' + this._id.$oid, {
                        params: defaultParams
                    })
                    .then(function(response) {
                        callback();
                    });
            };

            return Resource;
        };
    });