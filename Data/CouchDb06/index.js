function addNames(initFirstName, initLastName, initAge) {'use strict';

    $("#firstName").val(initFirstName);
    $("#lastName").val(initLastName);
    $("#age").val(initAge);
}

var boo = function(a) {
    alert(a);
}
function readJson() {
    $.getJSON('http://localhost:5984/prog28201/_all_docs', function(data) {
        boo(data);
    }).error(showError).complete(function() {
        console.log("csc: completed call to get index.json");
    });
}

var readJson02 = function() {
    $.ajax({
        type : 'GET',
        url : 'http://localhost:5984/prog28202',
        dataType : 'jsonp',
        success : function(data) {
            showDebug('Total Rows: ' + data.total_rows);
            showDebug('Id of Row 0: ' + data.rows[0].id);
            showDebug('Key of Row 0: ' + data.rows[0].key);
        },
        error : showError
    });
}
var writeJson03 = function() {
    var data = {
            "firstName" : "Tao",
            "lastName" : "Ching",
            "age" : "83"
    };
    $.ajax({
        url : 'http://localhost:5984/prog28202/',
        data : JSON.toString(data),
        contentType : "application/json",
        type : 'POST',
        dataType : "jsonp",
        success : function(resp) {
            alert(JSON.toString(resp));
        },
        error : showError
    });
}
var writeJson = function() {
    var userInput = {
        firstName : $('#firstName').val(),
        lastName : $('#lastName').val(),
        age : $('#age').val()
    };

    $.ajax({
        type : 'GET',
        url : '/write',
        dataType : 'json',
        data : userInput,
        success : function(data) {
            showDebug(data.result);
        },
        error : showError
    });
};

var showError = function(request, ajaxOptions, thrownError) {
    showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
    showDebug(request.status);
    showDebug(request.statusText);
    showDebug(request.getAllResponseHeaders());
    showDebug(request.responseText);
};

var showDebug = function(textToDisplay) {
    $("#debug").append('<li>' + textToDisplay + '</li>');
};

$(document).ready(function() {
    $("#buttonRead").click(readJson);
    $("#buttonRead02").click(readJson02);
    $("#buttonWrite").click(writeJson03);
}); 