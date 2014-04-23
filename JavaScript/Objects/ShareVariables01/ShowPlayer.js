/**
 * @author Charlie
 */

/*jshint jquery:true, browser:true, devel:true, strict:true */
/*global ELF:true */

var ELF = {};
ELF.own = {};

ELF.own.ShowPlayer = (function() {
    'use strict';

    var sharedData = null;

    function ShowPlayer(initData) {
        sharedData = initData;
        $('#buttonShowPlayer').click(showPlayerXY);
    }

    var showPlayerXY = function() {
        $('#test01').html('X = ' + sharedData.playerX + ' Y = ' + sharedData.playerY);
    };

    return ShowPlayer;
})();
