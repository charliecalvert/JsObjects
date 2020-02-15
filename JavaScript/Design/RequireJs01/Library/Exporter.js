/**
 * @author Charlie Calvert
 */

if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function() {
    function exportMe() {
        return 'exportMe';
    }

    return exportMe;
});
