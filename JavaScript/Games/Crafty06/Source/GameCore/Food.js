/**
 * @author Charlie Calvert
 */

// Food is a tile on the grid that the PC can eat
Crafty.c('Food01', {
    init: function() { 'use strict';
        this.requires('Actor, spr_food01');
    }
});

Crafty.c('Food02', {
    init: function() { 'use strict';
        this.requires('Actor, spr_food02');
    },

    // Process a visitation with this village
    /*visit: function() { 'use strict';
        this.destroy();
        Crafty.audio.play('knock');
        // Crafty.trigger('FoodVisited', this);
    }*/
});
