/**
 * @author Charlie Calvert
 */

// A village is a tile on the grid that the PC must visit in order to win the game
Crafty.c('Food', {
    init: function() { 'use strict';
        this.requires('Actor, spr_food');
    },

    // Process a visitation with this village
    visit: function() { 'use strict';
        this.destroy();
        Crafty.audio.play('knock');
        // Crafty.trigger('FoodVisited', this);
    }
});
