'use strict';

import Sailor from './SailorBridge';

const SailorBridgeExpert = (function() {
    var tack = ['port', 'starboard'];

    function SailorBridgeExpert(boat) {
        this.index = 0;
        this.currentTack = tack[this.index];
        this.setBoat(boat);
    }

    SailorBridgeExpert.prototype = new Sailor();

    SailorBridgeExpert.prototype.tack = function() {
        this.currentTack = tack[this.index];
        console.log('Tacking to ' + this.currentTack);
        return (
            'Expert Says that ' +
            this.boat.tack() +
            ' Tacking to ' +
            this.currentTack +
            '.'
        );
    };

    SailorBridgeExpert.prototype.tackPort = function() {
        return this.tack(0);
    };

    SailorBridgeExpert.prototype.tackStarboard = function() {
        return this.tack(1);
    };

    SailorBridgeExpert.prototype.getCurrentTack = function() {
        return (
            'This ' +
            this.boat.getBoatType() +
            ' is on the ' +
            this.currentTack +
            ' tack.'
        );
    };

    return SailorBridgeExpert;
})();

export default SailorBridgeExpert;
