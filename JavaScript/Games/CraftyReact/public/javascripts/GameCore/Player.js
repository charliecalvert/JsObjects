/**
 * @author Charlie
 */

/**
 * @author Charlie
 */
// This is the player-controlled character
Crafty.c('PlayerCharacter', {
	init : function() {'use strict';
		var DURATION = 25;
		var FRAME_COUNT = 3;
		this.requires('Actor, Fourway, Collision, spr_mainCharacter, SpriteAnimation')

		.fourway(125).stopOnSolids()
		.onHit('Village', this.visitVillage)
		.onHit('Food', this.visitFood)
		.onHit('Tree', this.visitTree)
		.onHit('Bush', this.visitBush)
		// These next lines define our four animations
		// each call to .animate specifies:
		// - the name of the animation
		// - the x and y coordinates within the sprite
		// map at which the animation set begins
		// - the number of animation frames *in addition to* the first one
		.reel('PlayerMovingUp', DURATION, 0, 0, FRAME_COUNT)
		.reel('PlayerMovingRight', DURATION, 0, 0, FRAME_COUNT)
		.reel('PlayerMovingDown', DURATION, 0, 0, FRAME_COUNT)
		.reel('PlayerMovingLeft', DURATION, 0, 0, FRAME_COUNT);

		// Watch for a change of direction and switch animations accordingly
		var LOOP_COUNT = 4;
		this.bind('NewDirection', function(data) {
			this.encounterMode = false;
			if (data.x > 0) {
				Crafty.game.gameMessages.changeDirectionMessage("Going Right");
				this.animate('PlayerMovingRight', LOOP_COUNT);
			} else if (data.x < 0) {
				Crafty.game.gameMessages.changeDirectionMessage("Going Left");
				this.animate('PlayerMovingLeft', LOOP_COUNT);
			} else if (data.y > 0) {
				Crafty.game.gameMessages.changeDirectionMessage("Going Down");
				this.animate('PlayerMovingDown', LOOP_COUNT);
			} else if (data.y < 0) {
				Crafty.game.gameMessages.changeDirectionMessage("Going Up");
				this.animate('PlayerMovingUp', LOOP_COUNT);
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

	// stop : function() {
	// 	// Not sure what this is supposed to do
     //    console.log('stop called');
     //    this.pauseAnimation();
	// },

	// Stops the movement
	stopMovement : function() {'use strict';
        
	    this.resetAnimation();
		//this._speed = 0;
		if (this._movement) {
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}
		//Crafty.stop();
	},

	// Respond to this player visiting a village
	visitVillage : function(data) {'use strict';
		this.stopMovement();

		// If we are in an encounter, then we do nothing until the user
		// asks to move again.
		if (this.encounterMode) {
		 	return;
		}

		Crafty.game.gameMessages.reportEvent("Found Tower: " + data[0].obj._entityName);
		if (Crafty.game.encounters.encounter(data[0].obj)) {
			const village = data[0].obj;
			village.visit();
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
		const food = data[0].obj;
		// food.sprite(0,2);
		food.visit();
		this.encounterMode = true;
	},

	visitTree: function(data) {'use strict';
		this.stopMovement();
		var tree = data[0].obj;
		tree.visit();
	},

	visitBush: function(data) {'use strict';
		this.pauseAnimation();
		this.stopMovement();

		if (this.encounterMode) {
			return;
		}
		var bush = data[0].obj;
		bush.visit();
	}
});
