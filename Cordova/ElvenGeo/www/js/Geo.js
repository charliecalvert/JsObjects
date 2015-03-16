/**
 * Created by charlie on 3/16/15.
 */



elf.Geo = (function() {


    function Geo() {
        elf.Utility.showMessage('In Geo');
    }

    function showMessage(message) {
        $("#geo").append('<li>' + message + '</li>');
    }

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        showMessage('Latitude: ' + position.coords.latitude);
        showMessage('Longitude: ' + position.coords.longitude);
        showMessage('Altitude: '          + position.coords.altitude);
        showMessage('Accuracy: '          + position.coords.accuracy);
        showMessage('Altitude Accuracy: ' + position.coords.altitudeAccuracy);
        showMessage('Heading: '           + position.coords.heading);
        showMessage('Speed: '             + position.coords.speed);
        showMessage('Timestamp: '         + position.timestamp);
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        elf.Utility.showMessage('code: '    + error.code + ' message: ' + error.message);
    }

    Geo.prototype.run = function() {
        if(app.geolocation) {
            var locationService = app.geolocation;
            elf.Utility.showMessage('Using native HTML5 geolocation');
        }
        else {
            var locationService = navigator.geolocation;
            elf.Utility.showMessage('Using cordova geolocation plugin');
        }
        locationService.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true, timeout: 5*1000, maximumAge: 0 });
    };

    return Geo;

})();