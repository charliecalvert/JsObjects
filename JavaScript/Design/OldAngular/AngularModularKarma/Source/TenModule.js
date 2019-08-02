/**
 * @author Charlie Calvert
 */

angular.module('tenModule', [])
.factory('tenFactory', function() { 'use strict';
	return {
		getTen: function() {
			return 10;
		}
	};
});
