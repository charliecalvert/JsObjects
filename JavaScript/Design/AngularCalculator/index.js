/**
 * @author Charlie Calvert
 */

(function() {

	/* Set up a simple controller */
	var app = angular.module('main', []);

	app.controller('AddController', function() {
		'use strict';

		var addController = this;
		addController.operandA = 17000;
		addController.operandB = 15000;

		addController.func = function() {
			return addController.operandA + addController.operandB;
		};
	});

})();