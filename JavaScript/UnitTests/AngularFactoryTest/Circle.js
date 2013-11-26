/**
 * @author Charlie
 */
angular.module('circleMod', [])
.factory('circleFactory', function() {

    return {
        areaOfCircle : function(radius) {
            return 0;
        },

        circumferenceOfCircle : function(radius) {
            return 1;
        }
    };
});
