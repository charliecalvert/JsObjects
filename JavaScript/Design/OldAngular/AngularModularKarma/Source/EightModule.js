/**
 * @author Charlie Calvert
 */

angular.module('eightModule', [])
.factory('eightFactory', function() { 'use strict';
    return {
        getEight: function() {
            return 8;
        }  
    };
});
