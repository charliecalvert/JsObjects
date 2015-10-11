/**
 * Created by charlie on 10/7/15.
 */

function getNine() {
    'use strict';
    return 9;
}

var queryServer = {

    url: './simple.json',

    queryResult: null,

    parseSimpleJson: function (simpleJson) { 'use strict';
        queryServer.queryResult = simpleJson.nine;
    },

    getAjaxServerNine: function () {
        'use strict';

        $.ajax({
            url: queryServer.url,
            success: function (simpleJson) {
                queryServer.parseSimpleJson(simpleJson);
                console.log(queryServer.queryResult);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus + "incoming Text " + jqXHR.responseText);
            }
        });
    },

    getJsonServerNine: function () {
        'use strict';

        $.getJSON(queryServer.url,function(simpleJson) {
                queryServer.parseSimpleJson(simpleJson);
                console.log(queryServer.queryResult);
                $('#serverResult').html(queryServer.queryResult);
        })/*
        This is the part that doesn't work with Jasmine spyOn. So I have
        switched to sinon, as shown in JasmineMockAjaxSinon
        .fail(function(error) {
            console.log(error);
        }); */

    }

};

$(document).ready(function () {
    'use strict';
    //queryServer.getAjaxServerNine();
    queryServer.getJsonServerNine();
});