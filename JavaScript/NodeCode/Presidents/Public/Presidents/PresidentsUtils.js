/**
 * @author Charlie
 */

ELF.PresidentUtils = (function() {
    'use strict';

    function PresidentUtils() {

    }

    // If you want to run a unit test, pass it in to testFunc. Other wise,
    // just leave the parameter alone. Don't pass in null.
    PresidentUtils.prototype.loadPresidents = function(fileName, testFunc) {
        $.ajax({
            type: "GET",
            async: true,
            url: fileName,
            dataType: "xml",
            success: function(xml) {
                var presidents = [];
                var i = 0;
                $(xml).find('President').each(function() {
                    presidents[i] = new ELF.EasyPresident($(this).children('Name').text(), $(this).children('term_start').text(), $(this).children('term_end').text(), $(this).children('born').text(), $(this).children('died').text());
                    i++;
                });
                if (typeof testFunc !== 'undefined') {
                    testFunc(presidents);
                }
            },
            error: showError
        });
    };

    PresidentUtils.prototype.getJson = function() {
        $.getJSON('index.json', function(data) {
            var first = data[0].firstName;
            var last = data[0].lastName;
            $("#firstName").html(first);
            $("#lastName").html(last);
        }).success(function() {
            console.log("csc: success. Loaded index.json");
        }).error(function(jqXHR, textStatus, errorThrown) {
            alert("error calling JSON." + errorThrown +
                " Try JSONLint or JSLint: " + textStatus);
        }).complete(function() {
            console.log("csc: completed call to get index.json");
        });
    };

    PresidentUtils.prototype.putPresident = function(url, fileName, json, success, error) {
        var data = {
            fileName: fileName,
            data: json
        };
        // data  = JSON.stringify(data);
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            cache: 'False',
            data: data,
            success: success || this.success,
            error: error || showError
        });
    };

    // // { fileName: 'margie', field2: 'charlie' },
    PresidentUtils.prototype.putPresidents = function(url, fileName, json, success, error) {
        var data = {
            fileName: fileName,
            data: JSON.stringify(json)
        };
        // data  = JSON.stringify(data);
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            cache: 'False',
            data: data,
            success: success || this.success,
            error: error || showError
        });
    };

    PresidentUtils.prototype.putJson2 = function(url, fileName, json, success, error) {
        var data = 'fileName=' + fileName + '&data=' + JSON.stringify(json);
        $.ajax({
            type: "POST",
            url: url,
            dataType: "html",
            cache: 'False',
            data: data,
            success: success || this.success,
            error: error || showError
        });
    };

    PresidentUtils.prototype.success = function(html) {
        $("#debug").append(html);
    };

    var showError = function(request, ajaxOptions, thrownError) {
        showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
        showDebug(request.status);
        showDebug(request.statusText);
        showDebug(request.getAllResponseHeaders());
        showDebug(request.responseText);
    };

    var showDebug = function(data) {
        $("#debugList").append("<li>" + data + "</li>");
    };

    return PresidentUtils;
})();
