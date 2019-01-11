/**
 * Created by charlie on 11/14/16.
 */

var express = require('express');
var router = express.Router();

// WRITE IT THIS WAY SO WE ONLY NEED TO INCLUDE ONE 'use strict'; STATEMENT
module.exports = (function() {
    'use strict';

    router.get('/page01', function(request, response, next) {
        response.send({
            message:
                'you viewed this page ' +
                request.session.views['/views/page01'] +
                ' times'
        });
    });

    router.get('/page02', function(request, response, next) {
        response.send({
            message:
                'you viewed this page ' +
                request.session.views['/views/page02'] +
                ' times'
        });
    });

    router.get('/session-status', function(request, response, next) {
        response.send({
            session: request.session
        });
    });

    router.get('/file-store', function(request, response, next) {
        if (request.session.viewCount) {
            request.session.viewCount++;
            response.send({
                viewCount: request.session.viewCount
            });
        } else {
            request.session.viewCount = 1;
            response.send({
                hello: 'Click another button and return here!'
            });
        }
    });

    router.get('/request', function(request, response, next) {
        //console.log('request called', request.user);
        var requester = {
            cookies: request.cookies,
            signedCookies: request.signedCookies,
            originalUrl: request.originalUrl,
            baseUrl: request.baseUrl,
            url: request.url,
            method: request.method,
            secret: request.secret || 'undefined',
            sessionID: request.sessionID,
            route: request.routes
        };
        console.log('==========================');
        for (var foo in request.connection) {
            if (request.hasOwnProperty(foo)) {
                console.log(foo);
            }
        }
        console.log('==========================');
        console.log(requester);
        response.send({
            request: requester
        });
    });

    return router;
})();
