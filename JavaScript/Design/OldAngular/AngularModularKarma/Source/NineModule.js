/**
 * @author Charlie Calvert
 */

angular.module('nineModule', [])
.factory('nineFactory', function() { 'use strict';
	return {
		getNine: function() {
			return 9;
		}  
	};
});
