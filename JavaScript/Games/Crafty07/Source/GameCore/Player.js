/**
 * @author Charlie
 */

/**
 * @author Charlie
 */
// This is the player-controlled character
Crafty.c('PlayerCharacter', {
	init : function() {'use strict';
		this.requires('Actor, Fourway, Collision, spr_mainCharacter, SpriteAnimation')

		.fourway(4).stopOnSolids().onHit('Village', this.visitVillage).onHit('Food', this.visitFood)
		// These next lines define our four animations
		// each call to .animate specifies:
		// - the name of the animation
		// - the x and y coordinates within the sprite
		// map at which the animation set begins
		// - the number of animation frames *in addition to* the first one
		.reel('PlayerMovingUp', 25, 0, 0, 4)
		.reel('PlayerMovingRight', 25, 0, 0, 4)
		.reel('PlayerMovingDown', 25, 0, 0, 4)
		.reel('PlayerMovingLeft', 25, 0, 1, 4)
		.animate('PlayerMovingUp', 4).animate('PlayerMovingRight', 4)
		// .animate('PlayerMovingRight', [[0,0], [1,0], [2,0], [3, 0], [4,0], [5, 0]])
		.animate('PlayerMovingDown', 4).animate('PlayerMovingLeft', 4);

		// Watch for a change of direction and switch animations accordingly
		var animation_speed = 8;
		this.bind('NewDirection', function(data) {
			this.encounterMode = false;
			if (data.x > 0) {
				Crafty.game.changeDirectionMessage("Going Right");
				this.playAnimation('PlayerMovingRight', animation_speed, -1);
			} else if (data.x < 0) {
				Crafty.game.changeDirectionMessage("Going Left");
				this.playAnimation('PlayerMovingLeft', animation_speed, -1);
			} else if (data.y > 0) {
				Crafty.game.changeDirectionMessage("Going Down");
				this.playAnimation('PlayerMovingDown', animation_speed, -1);
			} else if (data.y < 0) {
				Crafty.game.changeDirectionMessage("Going Up");
				this.playAnimation('PlayerMovingUp', animation_speed, -1);
			} else {
				this.resetAnimation();
			}
		});

		this.bind('goLeft', function() {
			// this.trigger('NewDirection', {x: 1, y: 0});
			this._movement.x = this._movement.x - 0.2;
			// this.x = this.x - 2;
			// this.animate('PlayerMovingRight', animation_speed, -1);
		});

		this.bind('stopMove', function() {
			this.stopMovement();
		});

		this.bind('youLose', function() {
			Crafty.scene('Failure');
		});
	},

	// Registers a stop-movement function to be called when
	//	this entity hits an entity with the "Solid" component
	stopOnSolids : function() {'use strict';
		this.onHit('Solid', this.stopMovement);
		return this;
	},

	stop : function() {
		// Not sure what this is supposed to do
	},

	// Stops the movement
	stopMovement : function() {'use strict';
		this._speed = 0;
		if (this._movement) {
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}
	},

	// Respond to this player visiting a village
	visitVillage : function(data) {'use strict';
		this.stopMovement();

		// If we are in an encounter, then we do nothing until the user
		// asks to move again.
		if (this.encounterMode) {
			return;
		}

		Crafty.game.reportEvent("Found Tower: " + data[0].obj._entityName);
		if (Crafty.game.encounter(data[0].obj)) {
			var villlage = data[0].obj;
			villlage.visit();
		} else {
			this.encounterMode = true;
		}
	},

	// visitFoodStart: function() {},

	visitFood : function(data) {'use strict';
		this.stopMovement();
		if (this.encounterMode) {
			return;
		}
		var food = data[0].obj;
		// food.sprite(0,2);
		food.visit();
		this.encounterMode = true;
	}
});
