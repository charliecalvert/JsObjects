/**
 * @author Charlie Calvert
 */

var fs = require('fs');
var handlebars = require('handlebars');

var SessionHelper = (function() {
    'use strict';

    function SessionHelper() {}

    // Please not that we convert to a string.
    var readHtml = function(fileName) {
        return String(fs.readFileSync(fileName));
    };

    SessionHelper.prototype.run = function(request) {
        // debugger;
        var mainFile = readHtml('./Templates/SessionInfo.html');

        var template = handlebars.compile(mainFile);

        var result = template({
            pageName: '2',
            userName: request.session.userName,
            previousPage: request.session.lastPage,
            cookieId: request.cookies['connect.sid'],
            sessionId: request.sessionID
        });

        return result;
    };

    return SessionHelper;

})();

exports.sessionHelper = new SessionHelper();
