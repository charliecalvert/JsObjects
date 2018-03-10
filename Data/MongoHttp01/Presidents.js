angular.module('mongoMod', [])

  .factory('mongolabResource', function ($http, CONFIG) {

    return function (collectionName) {

      //basic configuration
      var collectionUrl =
        'https://api.mongolab.com/api/1/databases/' +
        CONFIG.DB_NAME +
        '/collections/' + collectionName;

      var defaultParams = {apiKey:CONFIG.API_KEY};

      //utility methods
      var getId = function (data) {
        return data._id.$oid;
      };

      //a constructor for new resources
      const Resource = function (data) {
        angular.extend(this, data);
      };

      Resource.query = function (params) {
        return $http.get(collectionUrl, {
          params:angular.extend({q:JSON.stringify({} || params)}, defaultParams)
        }).then(function (response) {
            var result = [];
            angular.forEach(response.data, function (value, key) {
              result[key] = new Resource(value);
            });
            return result;
          });
      };

      Resource.save = function (data, callback) {
          /*fetch(collectionUrl)
              .then(function(response) {
                  return response.text()
              }).then(function(body) {
                  console.log(body);
            })*/
        return $http.post(collectionUrl, data, {params:defaultParams})
          .then(function (response) {
            const pres = new Resource(data);

            //return pres;
              callback(pres);
          });
      };

      Resource.prototype.$save = function (callback) {
        return Resource.save(this, callback);
      };

      Resource.remove = function (data) {
        return $http['delete'](collectionUrl + '/' + data._id.$oid, {params: defaultParams})
          .then(function (response) {
            return new Resource(data);
          });
      };

      Resource.prototype.$remove = function (data) {
        return Resource.remove(this);
      };

      //other CRUD methods go here

      //convenience methods
      Resource.prototype.$id = function () {
        return getId(this);
      };

      return Resource;
    };
  });