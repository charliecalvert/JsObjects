/**
 * Created by charlie on 3/18/15.
 */

elf.Control=(function() {

    function Control() {
        elf.utilities.showMessage('Control loaded');
        $('#buttonHome').load('ButtonHome.html', function() {
            $('#vibrate').click(vibrate);
            $('#photo').click(photo);
        });
    }

    function vibrate() {
        elf.utilities.showMessage('Vibrate');
        navigator.vibrate(1000);
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

    return Control;

})();

$(document).ready(function() {
    new elf.Control();
});