/**
 * Created by charlie on 3/16/15.
 */

var elf = {};

elf.Utility = {

    showMessage: function(message) {
        $('#debug').append('<li>' + message + '</li>');
    },
    runGeo: function() {
        var geo = new elf.Geo();
        geo.run();
    }
};