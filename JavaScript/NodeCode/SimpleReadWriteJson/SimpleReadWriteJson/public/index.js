function addNames(initFirstName, initLastName, initAge) {
    'use strict';

    $("#firstName").val(initFirstName);
    $("#lastName").val(initLastName);
    $("#age").val(initAge);
}

function readJson() {
    'use strict';
    $.getJSON('/read', function (data) {
        addNames(data.firstName, data.lastName, data.age);
    }).error(function (jqXHR, textStatus, errorThrown) {
        alert("error calling JSON. Try JSONLint or JSLint: " + textStatus + errorThrown);
    }).complete(function () {
        console.log("csc: completed call to get index.json");
    });
}

var writeJson = function () {
    'use strict';
    var userInput = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        age: $('#age').val()
    };

    $.ajax({
        type: 'GET',
        url: '/write',
        dataType: 'json',
        data: userInput,
        success: function (data) {
            showDebug(data.result);
        },
        error: showError
    });
};

var showError = function (request, ajaxOptions, thrownError) {
    'use strict';
    showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
    showDebug(request.status);
    showDebug(request.statusText);
    showDebug(request.getAllResponseHeaders());
    showDebug(request.responseText);
};

var showDebug = function (textToDisplay) {
    'use strict';
    $("#debug").append('<li>' + textToDisplay + '</li>');
};


$(document).ready(function () {
    'use strict';
    $("#buttonRead").click(readJson);
    $("#buttonWrite").click(writeJson);
});
