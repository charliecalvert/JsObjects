/**
 * @author Charlie
 */
/**
 * @author Charlie
 */
angular.module('myCircleMod', [])
.factory('myCircleFactory', function() {

    var MyCircle = (function() {
        
        function MyCircle() {
            
        }
        
        MyCircle.prototype.areaOfCircle = function(radius) {
            return 0;
        };

        MyCircle.prototype.circumferenceOfCircle = function(radius) {
            return 1;
        };
      
        return MyCircle; 
    })();
    
    return new MyCircle();
});
