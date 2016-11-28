// Builds the HTML Table out of myList.
function buildHtmlTable(selector, myList) {
    'use strict';
    var columns = addAllColumnHeaders(myList, selector);

    for (var i = 0; i < myList.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = myList[i][columns[colIndex]];

            if (cellValue === null) {
                cellValue = '';
            }

            row$.append($('<td/>').html(cellValue));
        }
        $(selector).append(row$);
    }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders(myList, selector) {
    'use strict';
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for (var i = 0; i < myList.length; i++) {
        var rowHash = myList[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
//    $(selector).addClass('table');
//    $(selector).addClass('table-striped');

    $(selector).append(headerTr$);

    return columnSet;
}

$(document).ready(function() {
    'use strict';
    var myList = [{
        'name': 'abc',
        'age': 50
    }, {
        'age': '25',
        'hobby': 'swimming'
    }, {
        'name': 'xyz',
        'hobby': 'programming'
    }];

    var objectArray = [{
        "Total": "34",
        "Version": "1.0.4",
        "Office": "New York",
        "Cost": null
    }, {
        "Total": "67",
        "Version": "1.1.0",
        "Office": "Paris"
    },
    {
        "Total": "67",
        "Version": "1.1.0",
        "Office": "Paris",
        "Cost": "$52.25"
    }];

    var stringArray = ["New York", "Berlin", "Paris", "Marrakech", "Moscow"];

    //Example data, nested Object. This data will create nested table also.
    var nestedTable = [{
        key1: "val1",
        key2: "val2",
        key3: {
            tableId: "tblIdNested1",
            tableClassName: "clsNested",
            linkText: "Download",
            data: [{
                subkey1: "subval1",
                subkey2: "subval2",
                subkey3: "subval3"
            }]
        }
    }];

    var data = [{
        "ok": true,
        "id": "npcsDoc",
        "rev": "1-29ae40db10a45e30fe9bc87afe54e31f"
    }];

    buildHtmlTable('#myTable', objectArray);

    var jsonHtmlTable = ConvertJsonToTable(data, 'jsonTable', 'table table-striped table-bordered', 'Download');

    //
    var jsonTable = $('#elfJsonTable');

    jsonTable.html(jsonHtmlTable);
    var liveTable = $('#jsonTable');
    //liveTable.addClass('table');
    //liveTable.addClass('table-striped');

});

