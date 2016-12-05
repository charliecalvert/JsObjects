/**
 * Created by charlie on 11/26/16.
 */

define(['runQuery', 'jsonToHtml', 'utility'], function(runQuery, jsonToHtml, utility) {
    'use strict';

    var insertController = function(query, result) {
        utility.clearAll();
        var docElement = $('#docs');

        docElement.empty();

        if (query.requestFailed) {
            docElement.html(JSON.stringify(query.requestFailed, null, 4));
        } else {
            var gameDocs = result.data;

            docElement.html(JSON.stringify(gameDocs, null, 4));
            var jsonHtmlTable = jsonToHtml(gameDocs, 'jsonTable', 'table table-bordered table-striped', 'Download');

            $('#myTable').html(jsonHtmlTable);
        }
    };

    insertController.insertNpcsOneDoc = function($q) {
        return runQuery('/insertFile?fileName=Npcs.json&id=oneDoc', $q);
    };

    return insertController;

});
