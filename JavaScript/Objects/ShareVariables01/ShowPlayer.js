/**
 * @author Charlie
 */

/*jshint jquery:true, browser:true, devel:true, strict:true */
/*global ELF:true */

var ELF = {};
ELF.own = {};

ELF.own.ShowPlayer = (function() { 'use strict';

	var data = null;

	function ShowPlayer(initData) {
		data = initData;
		$('#buttonShowPlayer').click(showPlayerXY);
	}

	var showPlayerXY = function() {
		$('#test01').html('X = ' + data.playerX + ' Y = ' + data.playerY);
	};

	return ShowPlayer;
})(); 