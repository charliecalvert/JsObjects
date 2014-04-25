var Presidents = (function() {
    'use strict';
    var display = null;
    var presidentMode = false;
    var selectedItem = '';
    var utilities = null;
    var presidentsList = null;

    function Presidents(displayInit, initUtilities) {
        display = displayInit;
        utilities = initUtilities;
    }

    var radioSelection = function() {
        selectedItem = $("input[name=responseGroup]:checked").attr('id');
        presidentName = $("input[name=responseGroup]:checked").attr('presidentName');
        var names = presidentName.split(' ');
        var firstName = names[0];
        var lastName = '';
        var middleName;
        if (names.length === 3) {
            middleName = names[1];
            lastName = names[2];
        } else {
            lastName = names[1];
        }

        if (middleName !== undefined)
            middleName = ($.trim(middleName) === '-' ? '' : $.trim(middleName));
        display.showDebug(selectedItem);
        $('#firstName').val(firstName);
        if (names.length === 3) {
            $('#middleName').val(middleName);
        }
        $('#lastName').val(lastName);
    };

    var clearResponse = function(debugMessage) {
        presidentMode = false;
        display.clearResponse();
        display.showDebug(debugMessage);
    };

    Presidents.prototype.testAzureSimpleDb = function() {
        window.location.replace('/testAzureSimpleDb');
    };

    var showPresidents = function() {
        display.clearResponse();
        var count = 0;
        $(presidentsList).each(function() {
            $(this).each(function() {
                this.itemName = 'item' + count++;
                display.displayRow(this);
            });
        });
    };

    Presidents.prototype.getPresidents = function(callback) {
        clearResponse("Get Presidents called");
        presidentMode = true;
        request = $.ajax({
            type: "get",
            url: '/getPresidents',
            cache: false,
            dataType: "json",
            success: function(data) {
                presidentsList = data;
                showPresidents();
                $('#responseGroup').change(radioSelection);
                $("input[name=responseGroup]:radio:first").attr('checked', true);
                radioSelection();
                if (typeof(callback) == 'function') {
                    display.showDebug("Callback coming");
                    callback();
                }
            },
            error: display.showError
        });
    };

    Presidents.prototype.savePresidents = function() {
        var data = {
            details: 'presidents',
            data: JSON.stringify(presidentsList)
        };
        $.ajax({
            type: "POST",
            url: '/savePresidents',
            dataType: "json",
            cache: 'False',
            data: data,
            success: function(data) {
                display.showDebug(data.result);
            },
            error: display.showError
        });
    };


    function getNames() {
        var names = {};
        names.firstName = $.trim($('#firstName').val());
        names.middleName = $.trim($('#middleName').val());
        names.lastName = $.trim($('#lastName').val());
        if (!utilities.readyForUpdate(firstName, lastName)) {
            alert("Please enter a name");
            return null;
        }
        return names;
    }


    Presidents.prototype.insertPresident = function() {
        names = getNames();
        if (names) {
            insertRecord(names.firstName, names.middleName, names.lastName);
        }
    };



    var insertRecord = function(firstName, middleName, lastName) {
        var pName = firstName + " " + middleName + " " + lastName;
        display.showDebug("inserting: " + pName);
        clearResponse('called putitem');
        var president = new ELF.EasyPresident(pName, 5, 6, 7, 8);
        var query = president.toJSON();
        presidentsList.push(query);
        showPresidents();
    };

    Presidents.prototype.deleteItem = function() {
        if (!presidentMode) {
            alert("You must select Get Presidents before trying to delete a president");
            return;
        }
        clearResponse('Called delete item: ' + selectedItem);
        query = "itemName=" + selectedItem;
        utilities.deleteFromArray2(presidentsList, selectedItem);
        showPresidents();
    };

    // TODO: Get this method working so we can update an existing
    // record
    Presidents.prototype.update = function() {
        if (!presidentMode) {
            alert("You must select Get President before updating.");
            return;
        }

        var names = getNames();
        if ((names) === null)
            return;

        var query = "uuid=" + selectedItem + "&firstName=" + names.firstName + '&middleName=' + names.middleName + "&lastName=" + names.lastName;

        request = $.ajax({
            type: "get",
            data: query,
            url: '/update',
            cache: false,
            dataType: "json",
            success: function(data) {
                display.showResponse("success" + data);
            },
            error: display.showError
        });
    };

    return Presidents;

})();

$(document).ready(function() {
    'use strict';
    var presidents = new Presidents(new Display(), new Utilities());
    $('button:#getPresidents').click(presidents.getPresidents);
    $('button:#insertPresident').click(presidents.insertPresident);
    $('button:#savePresidents').click(presidents.savePresidents);
    $('button:#update').click(presidents.update);
    $('button:#deleteitem').click(presidents.deleteItem);
    $('button:#testAzureSimpleDb').click(presidents.testAzureSimpleDb);
});
