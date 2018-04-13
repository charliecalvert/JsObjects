/**
 * @author Charlie Calvert
 */

/* global angular:true */

const People = (function() {

    People.prototype.heroMain = hero;

    function People() {

    }

    People.prototype.tower = function() {
        return {
            hitPoints: 4,
            damage: 1,
            bonusDamage: function() {
                return Math.floor(Math.random() * 2) + 1;
            },
            bonusHitPoints: function() {
                return Math.floor(Math.random() * 4) + 1;
            }
        };
    };

    return People;
})();

