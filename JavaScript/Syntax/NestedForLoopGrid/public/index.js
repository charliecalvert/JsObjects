

var App = (function() {
    'use strict';

    var MAX = 3;
    var grid = [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]
    ];

    function addGridText(item, value) {
        var element = document.getElementById(item);
        element.innerText = value;
    }

    function App() {
        for (var column = 0; column < MAX; column++) {
            for (var row = 0; row < MAX; row++) {
                var item = "item" + row + column;
                if (grid[row][column] === 0) {
                    addGridText(item, "0")
                } else {
                    addGridText(item, "X")
                }
            }
        }
    }

    return App;
})();

window.onload = function() {
    'use strict';
    new App();
};
