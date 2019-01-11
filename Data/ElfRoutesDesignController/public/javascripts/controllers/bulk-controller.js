/**
 * Created by charlie on 11/27/16.
 */

/**
 * Created by charlie on 11/4/16.
 */

define(['runQuery', 'jsonToHtml'], function(runQuery, jsonToHtml) {
    'use strict';

    var gameDocs;
    var index = 0;

    // By the time init is called, the HTML for this view is loaded
    function init() {
        $('#bulk-forward').click(function() {
            if (index < gameDocs.length - 1) {
                index++;
            }
            displayGameCode(gameDocs[index]);
        });
    }

    var displayGameCode = function(gameDoc) {
        $('#bulk-npcId').val(gameDoc.npc_id);
        $('#bulk-npcName').val(gameDoc.npc_name);
        $('#bulk-npcDescription').val(gameDoc.description);
        $('#bulk-npcQuestion').val(gameDoc.question);
        $('#bulk-npcAnswer').val(gameDoc.answer);
        $('#bulk-npcValue').val(gameDoc.value);
    };

    var bulkController = function(query, result) {
        var docElement = $('#docs');
        docElement.empty();
        if (query.requestFailed) {
            docElement.html(JSON.stringify(query.requestFailed, null, 4));
        } else {
            gameDocs = result.docs;
            displayGameCode(gameDocs[index]);

            docElement.html(JSON.stringify(gameDocs, null, 4));

            var editedGameDocs = gameDocs.map(function(row) {
                return {
                    id: row.id,
                    npcId: row.npc_id,
                    npcName: row.npc_name,
                    description: row.description,
                    color: row.color,
                    value: row.value,
                    question: row.question,
                    answer: row.answer
                };
            });
            var jsonHtmlTable = jsonToHtml(
                editedGameDocs,
                'jsonTable',
                'table table-bordered table-striped',
                'Download'
            );

            $('#myTable').html(jsonHtmlTable);
        }
    };

    bulkController.insertNpcsBulk = function($q) {
        return runQuery('/insertBulk?fileName=npcs-bulk.json', $q);
    };

    bulkController.viewBulk = function($q) {
        return runQuery('/viewNpcsBulk?designDoc=game&view=npcsBulk', $q);
    };

    bulkController.init = function($q) {
        init();
    };

    return bulkController;
});
