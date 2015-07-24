/**
 * @author Charlie Calvert
 */

angular.module('gameWrapMod', [])
	.constant('CONFIG', {
		testing: false
	})
	.factory('utility', function() {

		return {

			addStringFormat: function() {
				// String formatting. First, checks if it isn't implemented yet.
				// "{0} is dead, but {1} is alive! {0} {2}".format("ASP", "JavaScript")
				// From: http://stackoverflow.com/a/4673436/253576
				if (!String.prototype.format) {
					String.prototype.format = function() {
						var args = arguments;
						return this.replace(/{(\d+)}/g, function(match, number) {
							return typeof args[number] != 'undefined'
								? args[number]
								: match
								;
						});
					};
				}
			}
		}
	})
	.factory('gameWrap', function() {
		'use strict';
		return {
			startGame: function(gameDiv, elfGameService) {
				Crafty.init(elfGameService.width(), elfGameService.height(), gameDiv);
				Crafty.game = elfGameService;
				Crafty.background('rgb(0, 109, 20)');
				// Load the game
				Crafty.enterScene('Loading');
			},

			trigger: function() {

			}

		};
	});

