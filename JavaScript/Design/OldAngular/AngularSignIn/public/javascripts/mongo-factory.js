/**
 * Created by charlie on 6/7/2015.
 */

(function() {
    var app = angular.module('elvenApp');

    app.factory('mongoFactory', function($http) {
        var mongoFactory = {
            allData: null,

            currentId: null,

            getScientists: function(controller) {
                $http
                    .get('/all-data')
                    .success(function(data) {
                        if (data.allData.length > 0) {
                            mongoFactory.allData = data.allData;
                            var allDataNames = data.allData.map(function(
                                scientist
                            ) {
                                return {
                                    id: scientist._id,
                                    name:
                                        scientist.firstName +
                                        ' ' +
                                        scientist.lastName
                                };
                            });
                            allDataNames.sort(function(scientistA, scientistB) {
                                if (scientistA.name > scientistB.name) {
                                    return 1;
                                }
                                if (scientistA.name < scientistB.name) {
                                    return -1;
                                }
                                // a must be equal to b
                                return 0;
                            });
                            controller.scientists = allDataNames;
                            mongoFactory.getScientistById(
                                allDataNames[0].id,
                                controller
                            );
                        } else {
                            controller.scientists = null;
                            controller.scientist = null;
                        }
                    })
                    .error(function() {
                        console.log('error');
                    });
            },

            setControllerName: function(controller) {
                controller.name =
                    controller.scientist.firstName +
                    ' ' +
                    controller.scientist.lastName;
            },

            getScientistById: function(id, controller) {
                mongoFactory.currentId = id;
                var items = mongoFactory.allData.filter(function(scientist) {
                    return scientist._id === id;
                });
                controller.scientist = items[0];
                mongoFactory.setControllerName(controller);
                return controller.scientist;
            },

            insertValidCollection: function(controller) {
                $http
                    .post('/insertValidCollection', {})
                    .success(function(result) {
                        console.log(result);
                        mongoFactory.getScientists(controller);
                    })
                    .error(function() {
                        console.log(err);
                        controller.error = err;
                    });
            },

            emptyCollection: function(controller) {
                $http
                    .post('/emptyCollection', {})
                    .success(function(result) {
                        console.log(result);
                        mongoFactory.getScientists(controller);
                    })
                    .error(function(err) {
                        console.log(err);
                        controller.error = err;
                    });
            }
        };

        return mongoFactory;
    });
})();
