/**
 * Created by charlie on 11/26/16.
 */

define(['runQuery'], function(runQuery) {
    'use strict';

    function init() {
        $('#aboutCharlie').click(function() {
            $('#charlie').html('This is a note about Charlie made visible when the user clicked the button.');
        });
    }

    var aboutController = function(query, result) {
        init();
        var debug = $('#debug');
        if (result.ok) {
            var text = 'It worked';
            if (result.data) {
                text += '\n' + JSON.stringify(result.data, null, 4);
            }
            debug.html(text);
        } else if (result.requestFailed) {
            debug.html(JSON.stringify(result.requestFailed, null, 4));
        }
    };

    aboutController.about = function($q) {
        return runQuery('/aboutText', $q);
    };

    return aboutController;
});
