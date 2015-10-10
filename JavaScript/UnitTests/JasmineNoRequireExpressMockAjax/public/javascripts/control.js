/**
 * Created by charlie on 10/7/15.
 */

function getNine() {
    'use strict';
    return 9;
}

var bar = {

    url: './simple.json',

    value: null,

    parseSimpleJson: function (simpleJson) { 'use strict';
        bar.value = simpleJson.nine;
    },

    getAjaxServerNine: function () {
        'use strict';

        $.ajax({
            url: bar.url,
            success: function (simpleJson) {
                bar.parseSimpleJson(simpleJson);
                console.log(bar.value);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus + "incoming Text " + jqXHR.responseText);
            }
        });
    },

    getJsonServerNine: function () {
        'use strict';

        $.getJSON(bar.url,function (simpleJson) {
                bar.parseSimpleJson(simpleJson);
                console.log(bar.value);
        });/*.fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus + "incoming Text " + jqXHR.responseText);
        });*/
    }

};

$(document).ready(function () {
    'use strict';
    // bar.getAjaxServerNine();
});