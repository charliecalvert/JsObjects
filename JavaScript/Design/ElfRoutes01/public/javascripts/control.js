define(['Route', 'queryController'],
    function(Route, queryController) {
        'use strict';

        var findRoutes = (function($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: '/home',
                controller: queryController
            }).otherwise({
                redirectTo: '/home'
            });
        });

        return findRoutes;

    });
