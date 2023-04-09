/**
 * Created by charlie on 11/26/16.
 */

define(['runQuery'], function(runQuery) {
    'use strict';

    function init() {
        $('#target').submit(function(event) {
            event.preventDefault();
            var userFormData = $(this).serialize();
            $('#formResults').html(userFormData);
            $.getJSON('/user-form?' + userFormData, function(result) {
                $('#debug').html(JSON.stringify(result, null, 4));
            });
        });

        $('#help').click(function() {
            $('#charlie').html(
                '<strong>Help Text</strong>: Select some controls and press the Submit button.'
            );
        });
    }

    var queryController = function(query, result) {
        init();
    };

    return queryController;
});
