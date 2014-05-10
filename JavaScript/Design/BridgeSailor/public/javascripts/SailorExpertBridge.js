if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(["SailorBridge"], function(Sailor) {
	'use strict';
	
    var ExpertSailor = (function() {
        
        var tack = ['port', 'starboard'];                
        
        function ExpertSailor(boat) {    
        	this.currentTack = tack[0];
            this.setBoat(boat);
        }
        
        ExpertSailor.prototype = new Sailor();
        
        ExpertSailor.prototype.tack = function(index) {
            this.currentTack = tack[index];
            console.log("Tacking to " + this.currentTack);
            return this.boat.tack();
        };

        ExpertSailor.prototype.tackPort = function() {
            return this.tack(0);
        };

        ExpertSailor.prototype.tackStarboard = function() {
            return this.tack(1);
        };
        
        ExpertSailor.prototype.getCurrentTack = function() {
            return "This " + this.boat.getBoatType() + " is on the " + this.currentTack + " tack.";
        };
        
        return ExpertSailor;
        
    }());    

    return ExpertSailor;
}); 