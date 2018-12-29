/*jshint devel: true, browser: true, jquery: true, strict: true */

var App = (function() {
    'use strict';

    function App() {
        $('#buttonClear').click(clear);
        $('#buttonRead').click(readJson);
        $('#buttonCreate').click(create);
        $('#buttonDatabaseName').click(databaseName);
        $('#buttonWrite').click(write);
        $('#buttonDocNames').click(docNames);
        $('#buttonDesignDoc').click(designDoc);
        $('#buttonView').click(view);
        $('#buttonAttachHtml').click(attachHtml);
        $('#buttonGetAttachedHtml').click(getAttachedHtml);
        $('#buttonUpdateAttachedHtml').click(updateAttachedHtml);
        $('input[type=checkbox]').click(checkBox);
    }

    var checkBox = function(e) {
        if ($('#checkBoxHider').is(':checked')) {
            $('#createData').hide('slow');
        } else {
            $('#createData').show();
        }

        if ($('#checkBoxEdit').is(':checked')) {
            $('#editData').hide('slow');
        } else {
            $('#editData').show();
        }
    };

    var updateAttachedHtml = function() {
        $.ajax({
            type: 'GET',
            url: '/attachUpdateHtml',
            dataType: 'json',
            success: function(data) {
                showDebug(data.Result);
            },
            error: showNanoError
        });
    };

    var getAttachedHtml = function() {
        $.ajax({
            type: 'GET',
            url: '/getAttachedHtml',
            dataType: 'html',
            success: function(data) {
                $('#div01').html(data);
            },
            error: showNanoError
        });
    };

    var attachHtml = function() {
        $.ajax({
            type: 'GET',
            url: '/attachHtml',
            dataType: 'json',
            success: function(data) {
                showDebug(data.Result);
            },
            error: showNanoError
        });
    };

    var databaseName = function() {
        $.ajax({
            type: 'GET',
            url: '/databaseName',
            dataType: 'json',
            success: function(data) {
                showDebug(data.Result);
            },
            error: showError
        });
    };

    var view = function() {
        $.ajax({
            type: 'GET',
            url: '/view01',
            dataType: 'html',
            success: function(data) {
                $('#div01').html(data);
            },
            error: showNanoError
        });
    };

    var designDoc = function() {
        $.ajax({
            type: 'GET',
            url: '/designDoc',
            dataType: 'json',
            success: function(data) {
                showDebug(data.Result);
            },
            error: showError
        });
    };

    function addNames(docName, initFirstName, initLastName, initAge) {
        $('#docName').val(docName);
        $('#firstName').val(initFirstName);
        $('#lastName').val(initLastName);
        $('#age').val(initAge);
    }

    var clear = function() {
        $('#debug').empty();
    };
    function readJson() {
        var docName = {
            docName: $('#docName').val()
        };
        $.ajax({
            type: 'GET',
            url: '/read',
            data: docName,
            dataType: 'json',
            success: function(data) {
                addNames(data.docName, data.firstName, data.lastName, data.age);
            },
            error: showNanoError
        });
    }

    function docNames() {
        $.getJSON('/docNames', function(data) {
            for (var i = 0; i < data.length; i++) {
                showDebug(data[i]);
            }
        }).error(showNanoError);
    }

    var write = function() {
        var userInput = {
            docName: $('#docName').val(),
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
                showDebug(data.Result);
            },
            error: showError
        });
    };

    var create = function() {
        $.ajax({
            type: 'GET',
            url: '/create',
            dataType: 'json',
            success: function(data) {
                showDebug(data.Result);
            },
            error: showNanoError
        });
    };

    var showNanoError = function(request, ajaxOptions, thrownError) {
        var responseText = '';
        try {
            responseText = JSON.parse(request.responseText);
        } catch (error) {
            showDebug(request.responseText);
            return;
        }

        if (typeof responseText.p282special !== 'undefined') {
            showDebug(responseText.p282special);
        }
        showDebug(responseText.message);
        showError(request, ajaxOptions, thrownError);
    };

    var showError = function(request, ajaxOptions, thrownError) {
        showDebug('Error occurred: = ' + ajaxOptions + ' ' + thrownError);
        showDebug(request.status);
        showDebug(request.statusText);
        showDebug(request.getAllResponseHeaders());
        showDebug(request.responseText);
    };

    var showDebug = function(textToDisplay) {
        $('#debug').append('<li>' + textToDisplay + '</li>');
    };
    return App;
})();

$(document).ready(function() {
    'use strict';
    new App();
});
