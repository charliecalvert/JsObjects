/**
 * Created by charlie on 6/11/2015.
 */

var myModule = angular.module("elvenApp", [ 'ngRoute' ]);

myModule.config(function($routeProvider, $httpProvider, $locationProvider) {

		//================================================
		// Check if the user is connected
		//================================================
	var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
		// Initialize a new promise
		var deferred = $q.defer();

		// Make an AJAX call to check if the user is logged in
		$http.get('/login/loggedin').success(function(result){
			// Authenticated
			if (result !== false)
			/*$timeout(deferred.resolve, 0);*/
				deferred.resolve();

			// Not Authenticated
			else {
				$rootScope.message = 'You need to log in.';
				//$timeout(function(){deferred.reject();}, 0);
				deferred.reject();
				$location.url('/login');
			}
		});

		return deferred.promise;
	};
	//================================================

	//================================================
	// Add an interceptor for AJAX errors
	//================================================
	$httpProvider.interceptors.push(function($q, $location) {
		return {
			response: function(response) {
				// do something on success
				return response;
			},
			responseError: function(response) {
				if (response.status === 401) {
					console.log('status 401');
					$location.url('/login');
				}
				return $q.reject(response);
			}
		};
	});
	//================================================

	//================================================
	// Define all the routes
	//================================================
	$routeProvider.when("/", {
		templateUrl : "main",
		controller : "MainController",
		controllerAs: "mainController"
	}).when('/about', {
		templateUrl : "about",
		controller : "AboutController",
		controllerAs: 'aboutController',
		resolve: {
			loggedin: checkLoggedin
		}
	}).when('/login', {
		templateUrl : "login",
		controller : "LoginController",
		controllerAs: 'loginController'
	}).when('/logout', {
		templateUrl : "logout",
		controller : "LogoutController",
		controllerAs: 'logoutController'
	}).when('/register', {
		templateUrl : "register"
	}).otherwise({
		redirectTo : '/'
	});
});
