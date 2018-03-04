/**
 * @author Charlie Calvert
 */

define(function() {'use strict';

    var itemToShow = null;

    function ClientUi() {
        $('#intro').load("Pieces.html #introTemplate");
        $('#buttonBasic').load("Pieces.html #buttonTemplate", function() {
            $("#readTwo").click(readTwo);
            $("#newRecord").click(insertNewDocument);
            $("#showData").click(showData);
            $("#readRecords").click(readCountDocuments);
            $("#clearList").click(clearList);
            $('#readAll').click(readAll);
            $('#removeAll').click(removeAll);
            $('#update').click(update);
        });
    }

    var clearList = function(emptyMongoData) {
        $("#mongoData").empty();
        if (emptyMongoData) {
            $.publish('emptyMongoData', function() {
                // Nothing to do.
            });
        }
    };

    var displayDocument = function(document) {
        if ( typeof document !== 'undefined') {
            $('#firstName').html(document.firstName);
            $('#lastName').html(document.lastName);
            $('#address').html(document.address);
            $('#city').html(document.city);
            $('#state').html(document.state);
            $('#zip').html(document.zip);
        }
    };

    var displayList = function(data) {
        clearList(false);
        for (var i = 0; i < data.length; i++) {
            $("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
        }
    };

    var insertNewDocument = function() {
        $.publish('insertNewDocument', function(newData, mongoData) {
            displayDocument(newData[0]);
            displayList(mongoData);
        });
    };

    var showItem = function(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i][itemToShow.field] === itemToShow.value) {
                displayDocument(data[i]);
                itemToShow = null;
                return;
            }
        }
    };

    var readAll = function(event) {
        $.publish('readAll', function(data) {
            displayDocument(data[0]);
            displayList(data);
            if (itemToShow !== null) {
                showItem(data);
            }
        });
    };

    var readCountDocuments = function() {
        var numRequested = $('#numRequested').val();
        $.publish('readCountDocuments', {
            numRequested : numRequested,
            callback : function(data) {
                displayDocument(data[0]);
                displayList(data);
            }
        });
    };

    var readTwo = function() {
        $.publish('readTwo', function(data) {
            displayDocument(data[0]);
            displayList(data);
        });
    };

    var removeAll = function() {
        $.publish('removeAll', function(data) {
            if (data.result === "Success") {
                clearList(true);
            }
        });
    };

    var showData = function() {
        var index = $("#userIndex").val();
        $.publish("getDocument", {
            index : index,
            callback : function(document) {
                displayDocument(document);
            }
        });
    };

    var update = function() {
        var updateDetails = {
            field : 'firstName',
            oldString : "Thomas",
            newString : "Tom",
            callback : function(data) {
                if (data.result === 'Success') {
                    itemToShow = {
                        field : updateDetails.field,
                        value : updateDetails.newString
                    };
                    readAll();
                }
            }
        };

        $.publish('update', updateDetails);
    };

    return ClientUi;
});

