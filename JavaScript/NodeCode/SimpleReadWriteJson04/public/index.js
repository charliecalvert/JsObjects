/*jshint jquery:true, browser:true, devel: true, strict: true */

var App = (function() {'use strict';

    function App() {
        $("#buttonRead").click(readJson);
        $("#buttonWrite").click(writeJson);
    }

    function readJson() {
        var path = {
            fileName : 'Data/MyFile.txt'
        };
        $.ajax({
            type : 'GET',
            url : '/read',
            dataType : 'json',
            data : path,
            success : function(person) {
                showDebug(person.firstName);
                showDebug(person.lastName);
            },
            error : errorFunc
        });
    }

    var writeJsonPrivate = function(successFunc, showError) {
        // Here is the data I want to send:
        var fullName = {
            firstName : 'George',
            lastName : 'Washington'
        };
        // Here is the file name:
        var fileName = {
            fileName : 'Data/MyFile.txt'
        };
        // 	Now put them both in one object:
        var dataToSend = {
            path : fileName,
            person : fullName
        };

        $.ajax({
            type : 'GET',
            url : '/write',
            dataType : 'json',
            data : dataToSend,
            success : successFunc,
            error : showError
        });
    };

    var writeJson = function() {
        writeJsonPrivate(function(data) {
            showDebug(data.result);
        }, errorFunc);
    };

    var showDebug = function(textToDisplay) {
        $("#debug").append('<li>' + textToDisplay + '</li>');
    };

    var errorFunc = function(request, ajaxOptions, thrownError) {
        showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
        showDebug(request.status);
        showDebug(request.statusText);
        showDebug(request.getAllResponseHeaders());
        showDebug(request.responseText);
    };

    return App;

})();

$(document).ready(function() {'use strict';
    new App();
});
