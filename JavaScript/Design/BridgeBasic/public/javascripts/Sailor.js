/**
 * @author Charlie Calvert
 */

define(function(require) {'use strict';

    var Sailor = function() {
    
        Sailor.prototype.setBoat = function(boat) {
            this.boat = boat;
        };

        this.tack = function() {
            return this.boat.tack();
        };

        this.luff = function() {
            return this.boat.luff();
        };

        this.anchor = function(ch) {
            return this.boat.anchor();
        };
    };

    return new Sailor;

}); 