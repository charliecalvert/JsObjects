/**
 * @author Charlie Calvert
 */

/*jshint jquery:true, browser:true, devel:true, strict:true */
/*global ELF:true */

ELF.own.Player = (function() {
    'use strict';
    var that = {};
    that.playerX = 1;
    that.playerY = 2;

    // Constructor
    function Player() {
        new ELF.own.ShowPlayer(that);
        $('#buttonChangePlayer').click(changePlayer);
    }

    var changePlayer = function() {
        that.playerX += 1;
        that.playerY += 2;
    };

    return Player;
})();

window.onload = function() {
    'use strict';

    new ELF.own.Player();
};
