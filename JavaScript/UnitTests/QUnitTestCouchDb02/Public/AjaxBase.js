/**
 * @author Charlie Calvert
 */

ELF.own.AjaxBase = (function() {
    'use strict';

    function AjaxBase() {}

    AjaxBase.prototype.readJson = function(docName, success, failure) {
        $.ajax({
            type: 'GET',
            url: '/couchReadDoc',
            cache: false,
            data: {
                'docName': docName
            },
            dataType: "json",
            success: success,
            error: failure
        });
    };

    AjaxBase.prototype.writeJson = function(data, typeRequest, success, failure) {
        $.ajax({
            type: typeRequest,
            url: '/writeJson',
            cache: false,
            data: data,
            dataType: "json",
            success: success,
            error: failure
        });
    };

    AjaxBase.prototype.noData = function(urlRequest, success, failure) {
        $.ajax({
            type: 'GET',
            url: urlRequest,
            cache: false,
            dataType: "json",
            success: success,
            error: failure
        });
    };


    return AjaxBase;
})();
