/**
 * @author Charlie Calvert
 */

var app = {
    walkFolder: null,
    init: function() {
        'use strict';
        this.walkFolder = new WalkFolder();
    }
};

var WalkFolder = (function() {
    'use strict';

    function WalkFolder() {
        $("#walk").click(walk);
        $("#clearList").click(clearList);
        $('#walker').click(walker);
    }

    var clearList = function() {
        $("#walkList").empty();
    };

    var walk = function() {
        $.getJSON('/walk', function(data) {
            for (var i = 0; i < data.files.length; i++) {
                $("#walkList").append('<li>' + data.files[i] + '</li>');
            }
        });
    };

    var walker = function() {
        $.getJSON('/walker', { environmentVariable: 'ELF_CONTENT', folder: ['CloudNotes', 'Assignments']},  function(data) {
            for (var i = 0; i < data.length; i++) {
                $("#walkList").append('<li>' + JSON.stringify(data[i], null, 4) + '</li>');
            }
        });
    };

    return WalkFolder;
}());

$(document).ready(function() {
    'use strict';
    app.init();
});
