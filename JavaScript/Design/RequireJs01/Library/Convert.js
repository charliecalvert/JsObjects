/**
 * @author Charlie Calvert
 */

define({
    feetInMile: 5280,
    feetInYard: 3,
    milesToFeet: function(numMiles) {
        return this.feetInMile * numMiles;
    }
});
