/**
 * @author Charlie
 */

//  Allow tracking of X, Y coordinates on a Grid
Crafty.c('Grid', {
    init: function() {
        this.attr({
            w: Crafty.game.map_grid.tile.width,
            h: Crafty.game.map_grid.tile.height
        });
    },

    // Locate this entity at the given position on the grid
    at: function(x, y) {
        if (x === undefined && y === undefined) {
            return { x: this.x / Crafty.game.map_grid.tile.width, y: this.y / Crafty.game.map_grid.tile.height };
        } else {
            this.attr({ x: x * Crafty.game.map_grid.tile.width, y: y * Crafty.game.map_grid.tile.height });
            return this;
        }
    }
});