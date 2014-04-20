/**
 * @author Charlie
 */
angular.module('circleMod', [])
.factory('circleFactory', function() {
	'use strict';

    return {
        areaOfCircle : function(radius) {
            return radius + 1;
        },

        circumferenceOfCircle : function(radius) {
            return radius + 2;
        }
    };
});
