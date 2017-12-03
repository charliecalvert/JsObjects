/**
 * Created by charlie on 11/1/16.
 */

define(function(require) {
    'use strict';

    function runQuery(query, $q) {
        const controller = $q.getController();
        if (query) {
            fetch(query)
                .then((result) => result.json())
                .then((json) => controller(query, json))
                .catch((error) => console.log(error));
        } else {
            controller(null, $q);
        }
    }

    return runQuery;
});
