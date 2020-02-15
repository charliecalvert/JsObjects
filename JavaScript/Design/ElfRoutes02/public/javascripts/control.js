define(['Route', 'queryController', 'aboutController'], function(
    Route,
    queryController,
    aboutController
) {
    'use strict';

    var findRoutes = function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/home',
                controller: queryController
            })
            .when('/about', {
                templateUrl: '/about',
                controller: aboutController,
                resolve: {
                    result: aboutController.about
                }
            })
            .otherwise({
                redirectTo: '/home'
            });
    };

    return findRoutes;
});
