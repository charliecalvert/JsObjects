function startGame() {
	var game = {

		// Describe the grid for the GameBoard
		map_grid: {
			width: 12,
			height: 8,
			tile: {
				width: 32,
				height: 32
			}
		},

		// The width of the game screen in pixels 
		width: function() {
			return this.map_grid.width * this.map_grid.tile.width;
		},

		// Define the height of the game screen in pixels.
		height: function() {
			return this.map_grid.height * this.map_grid.tile.height;
		},

		start: function() {
		
			// Set Viewport width and height
			Crafty.init(this.width(), this.height());		
			Crafty.background('rgb(87, 109, 20)');

			// Call the Loading scene defined below
			Crafty.scene('Loading');
		}
	};
	
	Crafty.game = game;
	Crafty.game.start();	
}

// Locate an entity at the given position on the grid
// Called by Game Scene, used by all Actors: Tree, Bush
Crafty.c('Grid', {
	
	at: function(x, y) {
		if (x === undefined && y === undefined) {
			return { 
				x: this.x / Crafty.game.map_grid.tile.width, 
				y: this.y / Crafty.game.map_grid.tile.height 
			};
		} else {
			this.attr(
			{
				x: x * Crafty.game.map_grid.tile.width, 
				y: y * Crafty.game.map_grid.tile.height 
			});
			return this;
		}
	} 
});

// An "Actor" is an component that is drawn in 2D on canvas
//  via our logical coordinate grid
Crafty.c('Actor', {
	init: function() {
		this.requires('2D, Canvas, Grid');
	},
});

// A Tree is just an Actor with a certain color
Crafty.c('Tree', {
	init: function() {
		this.requires('Actor, spr_tree');		
	}
});

// A Bush is just an Actor with a certain color
Crafty.c('Bush', {
	init: function() {
		this.requires('Actor, spr_bush');
	}
});


// Call Crafty.scene()
// Called by the core gameplay loop
Crafty.scene('Game', function() {
	// Zero out the a 2D array that tracks gameBoard tiles
	this.gameBoard = new Array(Crafty.game.map_grid.width);
	for (var i = 0; i < Crafty.game.map_grid.width; i++) {
		this.gameBoard[i] = new Array(Crafty.game.map_grid.height);
		for (var y = 0; y < Crafty.game.map_grid.height; y++) {
			this.gameBoard[i][y] = false;
		}
	}

	function getAtEdge(x, y) {
		var xStatus = (x == 0 || x == Crafty.game.map_grid.width - 1);
		var yStatus = (y == 0 || y == Crafty.game.map_grid.height - 1);
		return xStatus || yStatus;
	}
	
	// Place a tree at every edge square on our grid of tiles
	for (var x = 0; x < Crafty.game.map_grid.width; x++) {
		for (var y = 0; y < Crafty.game.map_grid.height; y++) {
			var at_edge = getAtEdge(x, y);

			if (at_edge) {
				// Place a tree entity at the current tile
				var tree = Crafty.e('Tree').at(x, y);
				tree.setName(tree._entityName.replace('Entity', 'Tree'));
				this.gameBoard[x][y] = true;
			} else if (Math.random() < 0.06 && !this.gameBoard[x][y]) {
				// Place a bush entity at the current tile
				Crafty.e('Bush').at(x, y);
				this.gameBoard[x][y] = true;
			}
		}
	}
});

// Load binary assets such as images and audio files
Crafty.scene('Loading', function(){

	// Define our assets
	var images = ['Assets/cscGarden01-32X32.png'];

	// Load our assets and call callback
	// The offset is [Col, Row]
	Crafty.load(images, function() {
	
		Crafty.sprite(32, images[0], {
			spr_tree: [1, 1],
			spr_bush: [2, 0]
		});

		// Call game scene defined above
		Crafty.scene('Game');
	});
});

window.onload = function() {
	startGame();
};