define([
    'Route',
    'queryController',
    'nameController',
    'insertController',
    'bulkController'
], function(
    Route,
    queryController,
    nameController,
    insertController,
    bulkController
) {
    'use strict';

    var findRoutes = function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/home',
                controller: queryController,
                resolve: {
                    init: queryController.init
                }
            })
            .when('/databaseName', {
                templateUrl: '/display-default',
                controller: nameController,
                resolve: {
                    databaseName: nameController.databaseName,
                    allDbs: nameController.allDbs
                }
            })
            .when('/createDb', {
                templateUrl: '/display-default',
                controller: queryController,
                resolve: {
                    result: queryController.create
                }
            })
            .when('/deleteDb', {
                templateUrl: '/display-default',
                controller: queryController,
                resolve: {
                    result: queryController.delete
                }
            })
            .when('/insertDesignDoc', {
                templateUrl: '/display-default',
                controller: insertController,
                resolve: {
                    result: insertController.design
                }
            })
            .when('/insertBulk', {
                templateUrl: '/display-default',
                controller: bulkController,
                resolve: {
                    result: bulkController.insertNpcsBulk
                }
            })
            .when('/viewBulk', {
                templateUrl: '/row-display-bulk',
                controller: bulkController,
                resolve: {
                    result: bulkController.viewBulk,
                    init: bulkController.init
                }
            })
            .otherwise({
                redirectTo: '/home'
            });
    };

    return findRoutes;
});
