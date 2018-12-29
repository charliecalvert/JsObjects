/**
 * @name NameController.js
 */

define(['runQuery', 'utility', 'jsonToHtml'], function(
    runQuery,
    utility,
    jsonToHtml
) {
    'use strict';

    var nameController = function(query, data) {
        if (query.requestFailed) {
            utility.failed(query.requestFailed);
            return;
        }

        var debug = $('#debug');
        var docs = $('#docs');
        var displayData = JSON.stringify(data, null, 5);
        if (query === '/databaseName') {
            utility.clearAll();
            debug.html(displayData);
        } else {
            docs.html('allDatabases: ' + displayData);
            var jsonHtmlTable = jsonToHtml(
                JSON.parse(displayData),
                'jsonTable',
                'table table-bordered table-striped',
                'Download'
            );
            $('#myTable').html(jsonHtmlTable);
        }
    };

    nameController.databaseName = function($q) {
        return runQuery('/databaseName', $q);
    };

    nameController.allDbs = function($q) {
        return runQuery('/listDb', $q);
    };

    return nameController;
});
