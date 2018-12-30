var App = (function() {
    function App() {
        const button = document.getElementById('buttonRead02');
        button.onclick = readJson02;
    }

    const readJson02 = function() {
        const url = 'http://192.168.86.117:5984/';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                showData(data);
            })
            .catch(err => {
                showDebug(err);
            });

    };

    const showData = (data) => {
        const couch = document.getElementById('couchdb');
        const venderName = document.getElementById('venderName');
        const version = document.getElementById('version');
        const features = document.getElementById('features');

        couch.textContent = data.couchdb;
        version.textContent = data.version;
        venderName.textContent = data.vendor.name;
        features.textContent = data.features[0] + ', ' + data.features[1];
    };

    var showError = function(request, ajaxOptions, thrownError) {
        showDebug('Error occurred: = ' + ajaxOptions + ' ' + thrownError);
        showDebug(request.status);
        showDebug(request.statusText);
        showDebug(request.getAllResponseHeaders());
        showDebug(request.responseText);
    };

    var showDebug = function(textToDisplay) {
        const debug = document.getElementById('debug');
        debug.innerHTML += textToDisplay + '<br/>';
    };

    return App;
})();

window.onload = function() {
    new App();
};
