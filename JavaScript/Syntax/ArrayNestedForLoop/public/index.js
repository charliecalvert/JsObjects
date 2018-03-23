/**
 * @author Charlie Calvert
 */

var App = (function() {
    'use strict';
    var MAX = 2;

    function App() {
        for (var i = 0; i < MAX; i++) {
            for (var j = 0; j < MAX + 1; j++) {
                var span = "span" + i + j;
                console.log('Span:', span);
                const element = document.getElementById(span);
                element.innerHTML = span;                
            }
        }
    }

    return App;
})();

window.onload = function() {
    'use strict';
    new App();
};
