/**
 * @author Charlie
 */

var ELF = {};
ELF.own = {};

ELF.own.ShowPlayer = (function() {
	
	var data = null;
	
	function ShowPlayer(initData) {
		data = initData;
		$('#buttonShowPlayer').click(showPlayerXY);
	}
	
    var showPlayerXY = function() {
		$('#test01').html('X = ' + data.playerX + ' Y = ' + data.playerY);    	
    }

	return ShowPlayer;
})();