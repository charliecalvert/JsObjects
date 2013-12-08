/**
 * @author Charlie Calvert
 */

tools.factory('sailboat', function() { 'use strict';
    this.SailBoat = (function() {
        var description = "I'm a sailboat";
        
        function SailBoat() {
            
        }
        
        SailBoat.prototype.getNine = function() {
            return 9;
        };
        
        SailBoat.prototype.getDescription = function() {
            return description;
        };
        
        return SailBoat;       
    })();
    
    return new this.SailBoat();
});

