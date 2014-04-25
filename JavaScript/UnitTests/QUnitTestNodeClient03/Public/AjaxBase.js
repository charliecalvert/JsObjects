/**
 * @author Charlie Calvert
 */

ELF.own.AjaxBase = (function() {
    'use strict';

    function AjaxBase() {}

    AjaxBase.prototype.readJson = function(fileName, success, failure) {
        $.ajax({
            type: 'GET',
            url: fileName,
            cache: false,
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

    return AjaxBase;
})();
