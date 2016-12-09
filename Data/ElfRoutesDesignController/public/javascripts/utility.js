define(function() {
    'use strict';

    var utils = {

        clearAll: function() {

            function clear(selector) {
                $(selector).empty();
            }

            clear('#docs');
            clear('#debug');
            clear('#myTable');
        },

        failed: function(requestFailed) {
            var debug = $('#debug');
            debug.html(JSON.stringify(requestFailed, null, 4));
            var docs = $('#docs');
            docs.html(requestFailed.description);
        }
    };

    return utils;
});
