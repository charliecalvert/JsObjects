/**
 * Created by charlie on 6/11/2015.
 */

var app = angular.module('elvenApp');

app.controller('LogoutController', function(
    $http,
    $sce,
    $location,
    themeFactory
) {
    var logoutController = this;
    logoutController.hint = 'Sign in';
    logoutController.loggedInStatus = 'unknown';

    logoutController.logout = function() {
        console.log('logout');

        $http
            .get('/login/logout/')
            .success(function(user) {
                themeFactory.setLogin(false);
                console.log(user);
            })
            .error(function(err) {
                logoutController.hint = 'Could not call logout';
                logoutController.error = $sce.trustAsHtml(err);
            });
    };

    logoutController.isLoggedIn = function() {
        $http
            .get('/login/loggedin/')
            .success(function(user) {
                logoutController.loggedInStatus = user;
            })
            .error(function(err) {
                logoutController.hint = 'Bad Password/User. Try again';
            });
    };

    logoutController.logout();
});
