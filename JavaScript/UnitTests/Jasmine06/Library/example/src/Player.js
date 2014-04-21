function Player() {
	'use strict';
}
Player.prototype.play = function(song) {
	'use strict';
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
	'use strict';
  this.isPlaying = false;
};

Player.prototype.resume = function() {
	'use strict';
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
	'use strict';
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};