/**
 * Created by charlie on 6/11/2015.
 */

(function() {
    var app = angular.module('elvenApp');

    app.controller('AboutController', function($http) {
        var aboutController = this;

        aboutController.hint = 'About Document';

        aboutController.isLoggedIn = function() {
            $http
                .get('/login/loggedin/')
                .success(function(user) {
                    aboutController.loggedInStatus = user;
                })
                .error(function(err) {
                    aboutController.hint = 'Not able to get logged in status';
                });
        };
    });
})();
