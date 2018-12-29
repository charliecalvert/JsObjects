var App = (function() {
    function App() {
        $('#buttonRead02').click(readJson02);
    }

    var readJson02 = function() {
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:5984/',
            dataType: 'jsonp',
            success: function(data) {
                showDebug(data.couchdb);
                showDebug(data.vendor.name);
                showDebug(data.version);
            },
            error: showError
        });
    };

    var showError = function(request, ajaxOptions, thrownError) {
        showDebug('Error occurred: = ' + ajaxOptions + ' ' + thrownError);
        showDebug(request.status);
        showDebug(request.statusText);
        showDebug(request.getAllResponseHeaders());
        showDebug(request.responseText);
    };

    var showDebug = function(textToDisplay) {
        $('#debug').append('<li>' + textToDisplay + '</li>');
    };

    return App;
})();

$(document).ready(function() {
    new App();
});
