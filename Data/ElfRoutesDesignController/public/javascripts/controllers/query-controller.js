/**
 * Created by charlie on 11/26/16.
 */

define(['runQuery', 'utility'], function(runQuery, utility) {
    'use strict';

    var queryController = function(query, result) {
        utility.clearAll();
        if (query.requestFailed) {
            utility.failed(query.requestFailed);
            return;
        }
        var debug = $('#debug');
        var docs = $('#docs');
        if (result.ok) {
            var text = 'It worked';
            if (result.data) {
                text += '\n' + JSON.stringify(result.data, null, 4);
            }
            debug.html(text);
        } else if (result.error) {
            debug.html(result.error + ': ' + result.message);
        } else {
            debug.html(result);
        }
        docs.html(JSON.stringify(result.docs, null, 4));
    };

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
            $('#charlie').html('<strong>Help Text</strong>: Select some controls and press the Submit button.');
        });
    }

    queryController.init = function($q) {
        init();
    };

    queryController.delete = function($q) {
        return runQuery('/deleteDb', $q);
    };

    queryController.create = function($q) {
        return runQuery('/createDb', $q);
    };

    return queryController;

});
