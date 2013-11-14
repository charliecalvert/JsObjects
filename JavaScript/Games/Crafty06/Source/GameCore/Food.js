/**
 * @author Charlie Calvert
 */

// Food is a tile on the grid that the PC can eat
Crafty.c('Food', {
	count: 0,
	
    init: function() { 'use strict';
        this.requires('Actor, spr_food');
    },
    
    visit: function() { 'use strict';
    	this.count++;
    	switch (this.count) {
    		case 1: 
    		    this.sprite(1, 0);
    		    break;
    	    case 2: 
    			this.sprite(2, 0);
    			break;
    			
    		case 3:
    			this.sprite(3, 0);
    			break;
    					
    		default: 
    			this.destroy();
    			break;
    	}
    		
        Crafty.game.encounterFood(this, this.count); 
        
        Crafty.audio.play('knock');
        // Crafty.trigger('FoodVisited', this);
    },
    
    switchComponent: function() {
    	this.toggleComponent('Food01', 'Food02');
    }
});

