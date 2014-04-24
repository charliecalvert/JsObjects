/**
 * @author Charlie Calvert
 */

var App = (function() {
    'use strict';
    var MAX = 3;

    function App() {
        for (var i = 0; i < MAX; i++) {
            for (var j = 0; j < MAX; j++) {
                var span = "#span" + i + j;
                $(span).html(span);
            }
        }
    }

    return App;
})();

$(document).ready(function() {
    'use strict';
    new App();
});
