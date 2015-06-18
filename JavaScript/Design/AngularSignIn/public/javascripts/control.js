/**
 * Created by charlie on 6/6/2015.
 */

(function() {

	var app = angular.module('elvenApp');

	app.controller('MainController', function(mongoFactory) {
		
		var mainController = this;
		mainController.error = '';

		mainController.selectScientist = function(scientist) {
			mongoFactory.getScientistById(scientist.id, mainController)
		};

		mainController.insertValidCollection = function() {
			mongoFactory.insertValidCollection(mainController);
		};

		mainController.emptyCollection = function() {
			mongoFactory.emptyCollection(mainController);
		};

		mongoFactory.getScientists(mainController);
		// console.log(mainController.scientists);
	});

})();