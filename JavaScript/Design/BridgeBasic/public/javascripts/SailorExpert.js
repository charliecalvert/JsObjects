if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['Sailor'], function(sailor) {

    var ExpertSailor = function() {
        
        tack = ['port', 'starboard'];

        this.currentTack = tack[0];
        this.boat = sailor;
        
        ExpertSailor.prototype.setBoat = function(boat) {
            this.boat = boat;
        };
        
        this.tack = function(index) {
            this.currentTack = tack[index];
            console.log("Tacking to " + this.currentTack);
            return this.boat.tack();
        };

        this.tackPort = function() {
            return this.tack(0);
        };

        this.tackStarboard = function() {
            return this.tack(1);
        };
        
        ExpertSailor.prototype.getCurrentTack = function() {
            return this.currentTack;
        };
    };
    
    ExpertSailor.prototype = sailor;

    return new ExpertSailor();
}); 