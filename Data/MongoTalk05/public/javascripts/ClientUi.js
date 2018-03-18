/**
 * @author Charlie Calvert
 */

define(["utilities"], function(utilities) {
    'use strict';

    let itemToShow = null;
    let currentItems = null;

    function ClientUi() {
        $('#intro').load("Pieces.html #introTemplate");
        $('#buttonBasic').load("Pieces.html #buttonTemplate", function() {
            document.getElementById("readTwo").onclick = readTwo;
            document.getElementById("newRecord").onclick = insertNewDocument;
            //document.getElementById("showData").onclick = showData;
            document.getElementById("userIndex").onchange = showData;
            document.getElementById("readRecords").onclick = readCountDocuments;
            document.getElementById("clearList").onclick = clearList;
            document.getElementById("readAll").onclick = readAll;
            document.getElementById("removeAll").onclick = removeAll;
            document.getElementById("update").onclick = update;
        });



    }

    const clearList = function(emptyMongoData) {
        $("#mongoData").empty();
        if (emptyMongoData) {
            $.publish('emptyMongoData', function() {
                // Nothing to do.
            });
        }
    };

    const displayDocument = function(document) {
        if (typeof document !== 'undefined') {
            $('#firstName').html(document.firstName);
            $('#lastName').html(document.lastName);
            $('#address').html(document.address);
            $('#city').html(document.city);
            $('#state').html(document.state);
            $('#zip').html(document.zip);
        }
    };

    /*const appendToList = function(text) {
        const ul = document.getElementById("mongoData");
        const li = document.createElement("li");
        // li.className += "mdl-list__item mdl-list__item--two-line";
        li.innerHTML = text;
        ul.appendChild(li);
    };*/

    const displayByLastName = function(lastName) {
        for (let i = 0; i < currentItems.length; i++) {
            if (currentItems[i].lastName === lastName) {
                displayDocument(currentItems[i]);
            }
            }
        };

    const displayList = function(data) {
        clearList(false);
        currentItems = data;

        for (let i = 0; i < data.length; i++) {
            utilities.appendToList(data[i], displayByLastName);
        }

        document.getElementById("mongoData").addEventListener("click",function(e) {
            // e.target is our targetted element.
            // try doing console.log(e.target.nodeName), it will result LI
            if(e.target && e.target.nodeName == "LI") {
                console.log(e.target.id + " was clicked");
            }
        });
    };

    const insertNewDocument = function() {
        $.publish('insertNewDocument', function(newData, mongoData) {
            displayDocument(newData[0]);
            displayList(mongoData);
        });
    };

    const showItem = function(data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i][itemToShow.field] === itemToShow.value) {
                displayDocument(data[i]);
                itemToShow = null;
                return;
            }
        }
    };

    const readAll = function(event) {
        $.publish('readAll', function(data) {
            displayDocument(data[0]);
            displayList(data);
            if (itemToShow !== null) {
                showItem(data);
            }
        });
    };

    const readCountDocuments = function() {
        const numRequested = $('#numRequested').val();
        $.publish('readCountDocuments', {
            numRequested: numRequested,
            callback: function(data) {
                displayDocument(data[0]);
                displayList(data);
            }
        });
    };

    const readTwo = function() {
        $.publish('readTwo', function(data) {
            displayDocument(data[0]);
            displayList(data);
        });
    };

    const removeAll = function() {
        $.publish('removeAll', function(data) {
            if (data.result === "Success") {
                clearList(true);
            }
        });
    };

    const showData = function() {
        const index = $("#userIndex").val();
        $.publish("getDocument", {
            index: index,
            callback: function(document) {
                displayDocument(document);
            }
        });
    };

    const update = function() {
        const updateDetails = {
            field: 'firstName',
            oldString: "Thomas",
            newString: "Tom",
            callback: function(data) {
                if (data.result === 'Success') {
                    itemToShow = {
                        field: updateDetails.field,
                        value: updateDetails.newString
                    };
                    readAll();
                }
            }
        };

        $.publish('update', updateDetails);
    };



    return ClientUi;
});