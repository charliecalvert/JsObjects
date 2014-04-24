/**
 * @author Charlie
 */

var App = (function() {
    'use strict';

    function App() {
        window.addEventListener('keydown', doKeyDown, true);
    }

    var doKeyDown = function(evt) {
        switch (evt.keyCode) {
            case 38:
                /* Up arrow was pressed */
                $("#debug").html("up");
                break;
            case 40:
                /* Down arrow was pressed */
                $("#debug").html("down");
                break;
            case 37:
                /* Left arrow was pressed */
                $("#debug").html("left");
                break;
            case 39:
                /* Right arrow was pressed */
                $("#debug").html("right");
                break;
        }
    };

    return App;
})();


$(document).ready(function() {
    'use strict';
    new App();
});
