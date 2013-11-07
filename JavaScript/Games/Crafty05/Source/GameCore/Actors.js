/**
 * @author Charlie
 */

// An "Actor" is drawn on a Canvas and located on a 2D Grid
Crafty.c('Actor', {
    init: function() { 'use strict';
        this.requires('2D, Canvas, Grid');
    },
});

// A Tree is Solid so we can detect collisions, see Player
Crafty.c('Tree', {
    init: function() { 'use strict';
        this.requires('Actor, Solid, spr_tree');
    },
});

// A Bush is solid so we can detect collisions, see Player
Crafty.c('Bush', {
    init: function() { 'use strict';
        this.requires('Actor, Solid, spr_bush');
    },
});
