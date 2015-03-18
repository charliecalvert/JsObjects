/**
 * Created by charlie on 3/18/15.
 */

var elf = {};

elf.Control=(function() {

    function Control() {
        elf.utilities.showMessage('Control loaded');

        $('#phoneCall').click(phoneCall);
        $('#vibrate').click(vibrate);
        $('#photo').click(photo);
        /*
        $("#takePicture").addEventListener("touchend", function() {
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,
                sourceType: Camera.PictureSourceType.CAMERA,
                destinationType: Camera.DestinationType.FILE_URI
            });
        });
//Use from Library
        $("#usePicture").addEventListener("touchend", function() {
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: Camera.DestinationType.FILE_URI
            });
        }); */

    }

    function vibrate() {
        elf.utilities.showMessage('Vibrate');
        navigator.vibrate(1000);
    }

    function phoneCallWeb() {
        elf.utilities.showMessage('You called phone');
        window.location.href = "tel:2125551212";
    }

    function phoneCall() {
        phonedialer.dial(
            "4252420899",
            function(err) {
                if (err == "empty") elf.utilities.showMessage("Unknown phone number");
                else elf.utilities.showMessage("Dialer Error:" + err);
            },
            function(success) { elf.utilities.showMessage('Dialing succeeded'); }
        );
    }

    function photo() {
        elf.utilities.showMessage('Photo');
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });

        function onSuccess(imageData) {
            var image = document.getElementById('elfImage');
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }

    //Use from Camera

    return Control;

})();


elf.utilities = {
    showMessage: function(message) {
        $('#debug').append('<li>' + message + '</li>');
    }
};

$(document).ready(function() {
    new elf.Control();
});