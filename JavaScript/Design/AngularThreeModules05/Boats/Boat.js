/**
 * @author Charlie Calvert
 */

tools.factory('boat', function() { 'use strict';
    this.Boat = (function() {
        var description = "I'm a boat.";
        
        function Boat() {
            
        }
        
        Boat.prototype.getDescription = function() {
            return description;
        };
        
        return Boat;
    })();
    
    return new this.Boat();
});


