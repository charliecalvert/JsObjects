/**
 * Created by charlie on 3/16/15.
 */

elf.Ajax = (function() {

    var objectToSendFromClientToServer = [{
        "firstName" : "Qux",
        "lastName" : "Garply"
    },{
        "firstName" : "Corge",
        "lastName" : "Grault"
    }];

    function Ajax() {
        $("#getJson").click(parseJson);
        $("#getJsonAjax").click(parseWithAjax);
    }


    function displayFullName(data) {
        elf.utilities.clear();
        elf.utilities.showDebug(data.fullName);
        elf.utilities.showDebug(data.original.firstName);
        elf.utilities.showDebug(data.original.lastName);
        elf.utilities.createRadio(data.original.firstName, 'firstName');
        elf.utilities.createRadio(data.original.lastName, 'lastName');
        console.log(data);
    }

    function parseJson() {
        'use strict';

        $.getJSON('/getFullName',
            objectToSendFromClientToServer[0],
            function(data) {
                elf.utilities.clear();
                displayFullName(data);
            })
            .success(function() {
                console.log("csc: success. Loaded index.json");
            })
            .error(function(jqXHR, textStatus, errorThrown) {
                alert("error calling JSON. Try JSONLint or JSLint: "
                + textStatus + errorThrown);
            }).complete(function() {
                console.log("csc: completed call to get index.json");
            });
    }

    function parseWithAjax() {
        'use strict';

        $.ajax({
            type : 'GET',
            data: objectToSendFromClientToServer[1],
            url : '/getFullName',
            dataType : 'json',
            success : function(data) {
                elf.utilities.clear();
                displayFullName(data);
            },
            error : function(request, ajaxOptions, thrownError) {
                var error = "Error occurred: = " + ajaxOptions + " " + thrownError;
                elf.utilities.showDebug(error);
                elf.utilities.showDebug(request.status);
                elf.utilities.showDebug(request.statusText);
                elf.utilities.showDebug(request.getAllResponseHeaders());
                elf.utilities.showDebug(request.responseText);
            }
        });
    }

    return Ajax;
})();