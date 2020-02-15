/**
 * Sailor Bridge
 * @author Charlie Calvert
 */

const Sailor = (function() {
    function Sailor(boat) {
        this.setBoat(boat);
    }

    Sailor.prototype.setBoat = function(boat) {
        this.boat = boat;
    };

    Sailor.prototype.tack = function() {
        return this.boat.tack();
    };

    Sailor.prototype.luff = function() {
        return this.boat.luff();
    };

    Sailor.prototype.anchor = function(ch) {
        return this.boat.anchor();
    };

    return Sailor;
})();

export default Sailor;
