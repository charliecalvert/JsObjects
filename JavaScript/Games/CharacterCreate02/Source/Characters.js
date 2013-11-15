/**
 * @author Charlie Calvert
 */

/* global angular:true */

angular.module('characters', ['diceTools', 'mongoTower'])
.factory('people', function() {'use strict';

	return {

		races : [{
			name : 'Dwarves',
			description : 'Typically about 4 feet tall, stocky, lifespan of 300-400 years. Thick hair and beards',
			hitDie : 1,
			languages : ['Common', 'Dwarvish'],
			classes : ['Cleric', 'Fighter', 'Thief']
		}, {
			name : 'Halflings',
			description : 'Typically 3 tall, 60 lbs., with curly hair, no facial hair, lifespan of about 100 years.',
			hitDie : 6,
			languages : ['Common', 'Halfling'],
			classes : ['Cleric', 'Fighter', 'Thief']
		}, {
			name : 'Elves',
			description : 'Typically about 5 feet tall, slender, 130 lbs. Lifespan of 1200 years or more. Pale with dark hair, pointed ears, little or no facial hair.',
			hitDie : 6,
			languages : ['Common', 'Elvish'],
			classes : ['Fighter', 'Magic User']
		}, {
			name : 'Humans',
			description : 'Average male is typically 6 feet tall, 175 lbs., and lives about 75 years.',
			hitDie : 1,
			languages : ['Common'],
			classes : ['Any']
		}],

		classes : [{
			name : 'Cleric',
			armor : 'any',
			hitDie : 6,
			canUseShield : true,
			spells : ['none'],
			weapons : ['club', 'mace', 'maul', 'quarterstaff', 'sling', 'warhammer'],
			xpForLevelTwo : 1500
		}, {
			name : 'Fighter',
			armor : 'any',
			hitDie : 8,
			canUseShield : true,
			spells : ['none'],
			weapons : ['Any'],
			xpForLevelTwo : 2000
		}, {
			name : 'Magic-User',
			armor : 'none',
			hitDie : 4,
			canUseShield : false,
			spells : ['Charm Person', 'Detect Magic', 'Floating Disc', 'Hold Portal', 'Light', 'Magic Missile', 'Magic Mouth', 'Protection from Evil', 'Read Languages', 'Read Magic', 'Shield', 'Sleep', 'Ventriloquism'],
			weapons : ['cudgel', 'dagger', 'walking staff'],
			xpForLevelTwo : 2500
		}, {
			name : 'Thief',
			armor : 'leather',
			hitDie : 4,
			canUseShield : false,
			spells : ['none'],
			weapons : ['any'],
			xpForLevelTwo : 1250
		}],

		hero : {
			// race: this.races[2],
			// "class": this.classes[2],
			hitPoints : 12,			
			damage : 2,			
		
			bonusDamage : function() {
				return Math.floor(Math.random() * 2) + 1;
			},
			
			bonusHitPoints : function() {
				return Math.floor(Math.random() * 4) + 1;
			},
			
			neededToMove: function(level) {
				switch(level) {
					case 0: 
						return 5;
					case 2: 
						return 6;
					case 3: 
						return 7;
					default:
						return 100;
				}
			}
		},

		tower : function() {
			return {
				hitPoints : 8,
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

}).controller('peopleController', function($scope, $http, people, dice, towerData) { 'use strict';
	$scope.hint = "peopleController";	
	
	$scope.races = people.races;
	$scope.classes = people.classes;		
	$scope.hero = people.hero;
	
	
	towerData.query({}, function(tower) {
		$scope.tower = people.tower();
    	$scope.tower.hitPoints = tower[0].hitPoints;
      	$scope.tower.damage = tower[0].damage;       
    });
	
	var loadDefaults = function() {
		$http.get('hero.json').success(function(data, status, headers, config)  {
			people.hero.hitPoints = data.hitPoints;
			people.hero.damage = data.damage;
		}).error(function(data, status, headers, config) {
			throw new Error('Could not load hero.json!');
		});	
	};
	
	loadDefaults();
	
	var canMove = function(realRoll) {
		return (realRoll > people.hero.neededToMove());
	};
	
	$scope.encounter = function() {
		var baseRoll = dice.rollD20();
		$scope.baseRoll = baseRoll;
		baseRoll += $scope.hero.bonusHitPoints();
		$scope.realRoll = baseRoll;
		$scope.canMove = baseRoll > people.hero.neededToMove(0);
		$scope.hitReport = Math.floor(Math.random() * 2);
		$scope.tower.hitPoints -= $scope.hitReport;
	};
});
