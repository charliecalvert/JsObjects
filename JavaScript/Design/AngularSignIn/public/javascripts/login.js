/**
 * Created by charlie on 6/11/2015.
 */

var app = angular.module('elvenApp');

app.controller('LoginController', function($http, $location, themeFactory) {
	var loginController = this;
	loginController.hint = "Sign in";

	loginController.update = function() {
		console.log('update');
		var user = {
			"username": loginController.userName,
			"password": loginController.password
		};

		$http.post('/login/login/', user).success(function(user) {
			themeFactory.setLogin(true);
			console.log(user);
			$location.path('/');
		}).error(function(err) {
			loginController.hint = 'Bad Password/User. Try again';
		})
	}
});