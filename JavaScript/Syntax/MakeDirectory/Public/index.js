/**
 * @author Charlie Calvert
 */

var App = (function() {
    'use strict';

    function App() {
        $('#createDirectory').click(createDirectory);
        $('#copyFile').click(copyFile);
    }

    var createDirectory = function() {
        $.getJSON('/createDirectory', function(result) {
            $('#debug').append('<li>' + JSON.stringify(result) + '</li>');
        });
    };

    var copyFile = function() {
        $.getJSON('/copyFile', function(result) {
            $('#debug').append('<li>' + JSON.stringify(result) + '</li>');
        });
    };

    return App;

})();

$(document).ready(function() {
    "use strict";
    new App();
});
