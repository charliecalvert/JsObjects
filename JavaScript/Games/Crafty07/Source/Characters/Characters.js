/**
 * @author Charlie Calvert
 */

/* global angular:true */

angular.module('characterMod', ['heroMod'])
.factory('people', function(hero) {'use strict';

	return {

		classes : [{
			name : 'Cleric',
			armor : 'any',
			hitDie : 6,
			shield : true,
			spells : ['none'],
			weapons : ['club', 'mace', 'maul', 'quarterstaff', 'sling', 'warhammer'],
			xpForLevelTwo : 1500
		}, {
			name : 'Fighter',
			armor : 'any',
			hitDie : 8,
			shield : true,
			spells : ['none'],
			weapons : ['Any'],
			xpForLevelTwo : 2000
		}, {
			name : 'Magic-User',
			armor : 'none',
			hitDie : 4,
			shield : false,
			spells : ['Charm Person', 'Detect Magic', 'Floating Disc', 'Hold Portal', 'Light', 'Magic Missile', 'Magic Mouth', 'Protection from Evil', 'Read Languages', 'Read Magic', 'Shield', 'Sleep', 'Ventriloquism'],
			weapons : ['cudgel', 'dagger', 'walking staff'],
			xpForLevelTwo : 2500
		}, {
			name : 'Thief',
			armor : 'leather',
			hitDie : 4,
			shield : false,
			spells : ['none'],
			weapons : ['any'],
			xpForLevelTwo : 1250
		}],

		hero: hero,
		
		tower : function() {
			return {
				hitPoints : 4,
				damage : 1,
				bonusDamage : function() {
					return Math.floor(Math.random() * 2) + 1;
				},
				bonusHitPoints : function() {
					return Math.floor(Math.random() * 4) + 1;
				}
			};
		}
	};
});
