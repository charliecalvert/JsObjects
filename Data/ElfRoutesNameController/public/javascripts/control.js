define(['Route', 'queryController', 'nameController'],
    function(Route, queryController, nameController) {
        'use strict';

        var findRoutes = (function($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: '/home',
                controller: queryController
            }).when('/databaseName', {
                templateUrl: '/display-default',
                controller: nameController,
                resolve: {
                    databaseName: nameController.databaseName,
                    allDbs: nameController.allDbs
                }
            }).otherwise({
                redirectTo: '/home'
            });
        });

        return findRoutes;

    });
