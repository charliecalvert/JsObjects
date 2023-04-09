define(['crafty', 'simple_init'], function(crafty, simple) {
    'use strict';

    var box = Crafty.e('2D, Canvas, Color')
        .attr({
            x: 0,
            y: 0,
            w: 250,
            h: 200
        })
        .color('yellow');

    var box = Crafty.e('2D, Canvas, Color')
        .attr({
            x: 250,
            y: 200,
            w: 250,
            h: 200
        })
        .color('yellow');
});
