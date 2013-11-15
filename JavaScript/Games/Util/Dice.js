/**
 * @author Charlie Calvert
 */

angular.module('diceTools', [])
.factory('dice', function() { 'use strict';

	return {
		rollDetails : "",

		rollD20: function() {
			return Math.floor(Math.random() * 20) + 1;
		},
		
		rollD6 : function() {
			var randomNumber = Math.floor(Math.random() * 6) + 1;			
			return randomNumber;
		},

		rollD3 : function() {
			return Math.floor(Math.random() * 3) + 1;
		},

		roll3D6 : function() {
			var d1 = this.rollD6();
			var d2 = this.rollD6();
			var d3 = this.rollD6();
			rollDetails = d1 + ', ' + d2 + ', ' + d3;
			return d1 + d2 + d3;
		},

		getRollDetails : function() {
			return rollDetails;
		}
	};
}); 