/**
 * @author Charlie
 */

/* jshint browser: true */

// Draw the initial game state
Crafty.scene('Game', function() {
	'use strict';

	// A 2D array to keep track of all gameBoard tiles
	this.gameBoard = new Array(Crafty.game.map_grid.width);
	for (var i = 0; i < Crafty.game.map_grid.width; i++) {
		this.gameBoard[i] = new Array(Crafty.game.map_grid.height);
		for (var j = 0; j < Crafty.game.map_grid.height; j++) {
			this.gameBoard[i][j] = false;
		}
	}

	// Player character, placed at 5, 5 on our grid
	this.player = Crafty.e('PlayerCharacter').at(5, 5);
	this.gameBoard[this.player.at().x][this.player.at().y] = true;

	// Place a tree at every edge square on our grid of 16x16 tiles
	for (var x = 0; x < Crafty.game.map_grid.width; x++) {
		for (var y = 0; y < Crafty.game.map_grid.height; y++) {
			var at_edge = x === 0 || x === Crafty.game.map_grid.width - 1 || y === 0 || y === Crafty.game.map_grid.height - 1;

			if (at_edge) {
				// Place a tree entity at the current tile
				Crafty.e('Tree').at(x, y);
				this.gameBoard[x][y] = true;
			} else if (Math.random() < 0.06 && !this.gameBoard[x][y]) {
				// Place a bush entity at the current tile
				var bush = Crafty.e('Bush').at(x, y);
				// bush.setName(bush._entityName.replace('Entity', 'Bush'));
				this.gameBoard[x][y] = true;
			} else if (Math.random() < 0.05 && !this.gameBoard[x][y]) {
				Crafty.e('Food').at(x, y);
				this.gameBoard[x][y] = true;
			}
		}
	}


	// Generate up to five villages on the map in random locations
	var max_villages = 5;
	for (var col = 0; col < Crafty.game.map_grid.width; col++) {
		for (var row = 0; row < Crafty.game.map_grid.height; row++) {
			if (Math.random() < 0.02) {
				if (Crafty('Village').length < max_villages && !this.gameBoard[col][row]) {
					var village = Crafty.e('Village').at(col, row);
					village.setName(village._entityName.replace('Entity', 'Village'));
					Crafty.game.newVillage(village);
				}
			}
		}
	}


	// Show the victory screen once all villages are visisted
	this.show_victory = this.bind('VillageVisited', function() {
		Crafty.game.gameMessages.sendDebugMessage("Village Length: " + Crafty('Village').length);
		if (!Crafty('Village').length) {
			Crafty.scene('Victory');
		}
	});
}, function() {
	'use strict';
	// Remove our event binding from above so that we don't
	//  end up having multiple redundant event watchers after
	//  multiple restarts of the game
	this.unbind('VillageVisited', this.show_victory);
});


// Victory scene : Announce victory, set up a new game
Crafty.scene('Victory', function() {
	'use strict';
	// Display some text in celebration of the victory
	Crafty.e('2D, DOM, Text')
		.attr({x: 0, y: 0})
		.text('You are victorious!');

	// restart the game when a key is pressed
	this.restart = function() {
		Crafty.scene('Game');
	};

	// Bind keydown event. This was done wrong in the demo
	this.bind('KeyDown', this.restart);
}, function() {
	'use strict';
	// Remove key binding to prevent multiple restarts
	if (!this.unbind('KeyDown', this.restart)) {
		window.alert("Could not unbind");
	}

});

Crafty.scene('Failure', function() {
	'use strict';
	// Display some text in celebration of the victory
	Crafty.e('2D, DOM, Text')
		.attr({x: 0, y: 0})
		.text('You Lose!')
		.textColor('#FFFFFF')
		.textFont({size: '48px', weight: 'bold'});


	// restart the game when a key is pressed
	this.restart = function() {
		Crafty.scene('Game');
	};

	// Bind keydown event. This was done wrong in the demo
	this.bind('KeyDown', this.restart);
}, function() {
	'use strict';
	// Remove key binding to prevent multiple restarts
	if (!this.unbind('KeyDown', this.restart)) {
		window.alert("Could not unbind");
	}

});

// Load binary assets such as images and audio files
Crafty.defineScene('Loading', function() {
	'use strict';

	var assets = {
		"audio": {
			"knock": 'Assets/door_knock_3x.mp3'
		},
		"images": [
			'Assets/BoyWalk.png'
		],
		"sprites": {
			'Assets/cscGarden01-32X32.png': {
				"tile": 32,
				"tileh": 32,
				"map": {"spr_tree": [0, 3], "spr_bush": [1, 3], "spr_village": [0, 1], "spr_food": [0, 0]},
				"paddingX": 0,
				"paddingY": 0,
				"paddingAroundBorder": 0
			},
			'Assets/People256.png': {
				"tile": 32,
				"tileh": 32,
				"map": {"spr_mainCharacter": [0, 0]},
				"paddingX": 0,
				"paddingY": 0,
				"paddingAroundBorder": 0
			}
		}
		};

	// Load our sprite map image
	Crafty.load(assets, function() {
		/*
		Crafty.sprite(32, assets[0], {
			spr_tree: [0, 3],
			spr_bush: [1, 3],
			spr_village: [0, 1],
			spr_food: [0, 0]
		});

		//  The main character
		Crafty.sprite(32, 32, assets[3], {
			spr_mainCharacter: [0, 0],
		}, 0, 0);

		// Define our sounds for later use
		Crafty.audio.add({
			knock: ['http://desolate-caverns-4829.herokuapp.com/assets/door_knock_3x.mp3']
		}); */

		// Display text while loading
		Crafty.e('2D, DOM, Text')
			.attr({x: 0, y: Crafty.viewport.height / 2 - 24, w: Crafty.viewport.width})
			.text('Loading...');

		// Now that our sprites are ready to draw, start the game
		Crafty.scene('Game');
	});
});
