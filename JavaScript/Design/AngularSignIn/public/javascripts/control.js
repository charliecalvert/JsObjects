/**
 * Created by charlie on 6/6/2015.
 */

(function() {

	var app = angular.module('elvenApp');

	app.controller('MainController', function(mongoFactory) {
		
		var mainController = this;

		mainController.selectScientist = function(scientist) {
			mongoFactory.getScientistById(scientist.id, mainController)
		};

		mainController.insertValidCollection = function() {
			mongoFactory.insertValidCollection();
		};

		mainController.emptyCollection = function() {
			mongoFactory.emptyCollection();
		};

		mongoFactory.getScientists(mainController);
		// console.log(mainController.scientists);
	});

})();