/**
 * @author Charlie
 */

// An "Actor" is drawn on a Canvas and located on a 2D Grid
Crafty.c('Actor', {
    init: function() { 'use strict';
        this.requires('2D, Canvas, Grid');
    }
});

// A Tree is Solid so we can detect collisions, see Player
Crafty.c('Tree', {
    init: function() { 'use strict';
        this.requires('Actor, spr_tree');
    },

    visit: function() {
        Crafty.game.encounterBush(this, this.count);
    }
});

// A Bush is solid so we can detect collisions, see Player
Crafty.c('Bush', {
    init: function() { 'use strict';
        this.requires('Actor, spr_bush');
    },

    visit: function() {
        Crafty.game.encounterBush(this, this.count);
    }
});
