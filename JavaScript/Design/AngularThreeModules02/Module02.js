/**
 * @author Charlie Calvert
 */

var boat = angular.module('boat', []);

boat.factory('boat', function() { 
	'use strict';
	return {
		description : "I'm a simple boat."
	};
});
