/**
 * @author Charlie
 */

/**
 * @author Charlie
 */
// This is the player-controlled character
Crafty.c('PlayerCharacter', {
    init: function() {
        this.requires('Actor, Fourway, Collision, mainCharacter, SpriteAnimation')
            .fourway(2)
            .stopOnSolids()
            .onHit('Village', this.visitVillage)
            // These next lines define our four animations
            //  each call to .animate specifies:
            //  - the name of the animation
            //  - the x and y coordinates within the sprite
            //     map at which the animation set begins
            //  - the number of animation frames *in addition to* the first one
            .animate('PlayerMovingUp',    0, 2, 2)
            .animate('PlayerMovingRight', 0, 0, 2)
            .animate('PlayerMovingDown',  0, 2, 2)
            .animate('PlayerMovingLeft',  0, 0, 2);

        // Watch for a change of direction and switch animations accordingly
        var animation_speed = 5;
        this.bind('NewDirection', function(data) {
            this.encounterMode = false;
            if (data.x > 0) {
                Crafty.game.changeDirectionMessage("Going Right");
                this.animate('PlayerMovingRight', animation_speed, -1);
            } else if (data.x < 0) {
                Crafty.game.changeDirectionMessage("Going Left");
                this.animate('PlayerMovingLeft', animation_speed, -1);
            } else if (data.y > 0) {
                Crafty.game.changeDirectionMessage("Going Down");
                this.animate('PlayerMovingDown', animation_speed, -1);
            } else if (data.y < 0) {
                Crafty.game.changeDirectionMessage("Going Up");
                this.animate('PlayerMovingUp', animation_speed, -1);
            } else {
                this.stopMovement();
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
    },

    // Registers a stop-movement function to be called when
    //  this entity hits an entity with the "Solid" component
    stopOnSolids: function() {
        this.onHit('Solid', this.stopMovement);
        return this;
    },

    // Stops the movement
    stopMovement: function() {
        this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    },

    
    
    // Respond to this player visiting a village
    visitVillage: function(data) {
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
    }
});
