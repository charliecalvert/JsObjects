/*jshint devel: true, browser: true, jquery: true, strict: true */

var App = (function() { 'use strict';
    
    function App() {
		$("#buttonClear").click(clear);
        $("#buttonRead").click(readJson);
        $("#buttonCreate").click(create);
        $("#buttonDatabaseName").click(databaseName);
        $("#buttonWrite").click(write);
        $("#buttonDocNames").click(docNames);
        $("#buttonDesignDoc").click(designDoc);
        $("#buttonView").click(view);
    }

    var databaseName = function() {
    	$.ajax({
            type : 'GET',
            url : '/databaseName',
            dataType : 'json',
            success : function(data) {
                showDebug(data.Result);
            },
            error : showError
        });
    }
    
    var view = function() {
        $.ajax({
            type : 'GET',
            url : '/view01',
            dataType : 'html',
            success : function(data) {
                $('#div01').html(data);
            },
            error : showError
        });    
    };
    
    var designDoc = function() {
        $.ajax({
            type : 'GET',
            url : '/designDoc',
            dataType : 'json',
            success : function(data) {
                showDebug(data.Result);
            },
            error : showError
        });
    };
    
    function addNames(docName, initFirstName, initLastName, initAge) {
        $('#docName').val(docName);
        $("#firstName").val(initFirstName);
        $("#lastName").val(initLastName);
        $("#age").val(initAge);
    }

	var clear = function() {
		$('#debug').empty();
	}
    function readJson() {
        var docName = {
            "docName" : $('#docName').val()
        };
        $.ajax({
            type : 'GET',
            url : '/read',
            data : docName,
            dataType : 'json',
            success : function(data) {
                addNames(data.docName, data.firstName, data.lastName, data.age);
            },
            error : showError
        });
    }

    function docNames() {
        $.getJSON('/docNames', function(data) {
            for (var i = 0; i < data.length; i++) {
                showDebug(data[i]);
            }
        }).error(function(jqXHR, textStatus, errorThrown) {
            alert("error calling JSON. Try JSONLint or JSLint: " + textStatus);
        }).complete(function() {
            console.log("csc: completed call to get index.json");
        });
    }

    var write = function() {
        var userInput = {
            docName : $('#docName').val(),
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
                showDebug(data.Result);
            },
            error : showError
        });
    };

    var create = function() {
        $.ajax({
            type : 'GET',
            url : '/create',
            dataType : 'json',
            success : function(data) {
                showDebug(data.Result);
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
    return App;
})();

$(document).ready(function() {'use strict';
    new App();
}); 