/**
 * Created by charlie on 3/18/15.
 */

var elf = {};

elf.Control=(function() {

    function Control() {
        elf.utilities.showMessage('Control loaded');
        $('#phoneCall').click(phoneCall);
        $('#phoneCallWeb').click(phoneCallWeb);
    }

    function phoneCallWeb() {
        elf.utilities.showMessage('You called phone');
        window.location.href = "tel:+1-800-555-1234";
    }

    function phoneCall() {
        elf.utilities.showMessage('You called phone plugin');
        phonedialer.dial(
            "18005551234",
            function(err) {
                if (err == "empty") elf.utilities.showMessage("Unknown phone number");
                else elf.utilities.showMessage("Dialer Error:" + err);
            },
            function(success) { elf.utilities.showMessage('Dialing succeeded'); }
        );
    }

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