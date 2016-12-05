/**
 * Created by charlie on 11/1/16.
 */

define(function(require) {
    'use strict';

    function runQuery(query, $q) {
        var controller = $q.getController();
        if (query) {
            $.getJSON(query, function(json) {
                controller(query, json);
            }).fail(function(jqxhr, textStatus, error) {
                var response = {
                    error: 'Unknown. Is program running?'
                };
                if (jqxhr.responseText) {
                    response = JSON.parse(jqxhr.responseText);
                    response.genericError = error;
                    response.statusText = textStatus;
                }
                controller({
                    'requestFailed': response
                });
            });
        } else {
            controller(null, $q);
        }
    }

    return runQuery;
});
