/**
 * @author Charlie
 */
var app = angular.module('triangleMod', [])
.factory('triangleFactory', function() {
   return {
       pythagoras: function() {
           return 3;
       }
   };
});
