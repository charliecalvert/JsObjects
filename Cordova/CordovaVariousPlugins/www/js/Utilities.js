/**
 * Created by charlie on 3/18/15.
 */

var elf = {};

elf.utilities = {
    showMessage: function(message) {
        $('#debug').append('<li>' + message + '</li>');
    }
};
