/**
 * Created by charlie on 11/4/16.
 */

define(['runQuery', 'jsonToHtml'], function(runQuery, jsonToHtml) {
    'use strict';

    var gameDocs;
    var index = 0;

    function init() {
        $('#one-doc-forward').click(function() {
            if (index < gameDocs.length - 1) {
                index++;
            }
            displayGameCode(gameDocs[index]);
        });
    }

    var displayGameCode = function(gameDoc) {
        $('#one-doc-npcId').val(gameDoc.npc_id);
        $('#one-doc-npcName').val(gameDoc.npc_name);
        $('#one-doc-npcDescription').val(gameDoc.description);
        $('#one-doc-npcQuestion').val(gameDoc.question);
    };

    var readController = function(query, result) {
        var docElement = $('#docs');
        docElement.empty();
        if (query.requestFailed) {
            docElement.html(JSON.stringify(query.requestFailed, null, 4));
        } else {
            gameDocs = result.docs;
            displayGameCode(gameDocs[index]);

            docElement.html(JSON.stringify(gameDocs, null, 4));
            var jsonHtmlTable = jsonToHtml(
                gameDocs,
                'jsonTable',
                'table table-bordered table-striped',
                'Download'
            );

            $('#myTable').html(jsonHtmlTable);
        }
    };

    readController.readOne = function($q) {
        return runQuery('/read?docName=npcsDoc', $q);
    };

    readController.init = function($q) {
        init();
    };

    return readController;
});
