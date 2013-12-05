/**
 * @author Charlie
 */

angular.module('heroMod', [])
.factory('hero', function() {
	return {
			// race: this.races[2],
			// "class": this.classes[2],
			name: 'Sam',
			hitPoints : 12,
			damage : 2,
			bonusDamage : function() {
				return Math.floor(Math.random() * 2) + 1;
			},
			bonusHitPoints : function() {
				return Math.floor(Math.random() * 4) + 1;
			}
	};

});
