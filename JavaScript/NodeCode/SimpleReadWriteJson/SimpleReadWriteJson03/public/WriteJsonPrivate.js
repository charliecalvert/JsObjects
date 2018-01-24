function writeJsonPrivate () {
    const userInput = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        age: $('#age').val()
    };

    $.ajax({
        type: 'GET',
        url: '/write',
        dataType: 'json',
        data: userInput,
        success: function(data) {
            showDebug(data.result);
        },
        error: function(request, ajaxOptions, thrownError) {
            showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
            showDebug(request.status);
            showDebug(request.statusText);
            showDebug(request.getAllResponseHeaders());
            showDebug(request.responseText);
        }
    });
}

