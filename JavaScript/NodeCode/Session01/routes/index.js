var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Session Tracker One' });
});

function getLastpage(sessionPage) {
    let lastPage = 'This is the first page you have visited.';
    const previous = 'Previously you visited: ';
    if (sessionPage) {
        lastPage = previous + sessionPage + '.';
    }
    return lastPage;
}

//
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function display(request, response, lastPage) {
    console.log(request.session);
    console.log(request.cookies);
    const page = capitalizeFirstLetter(request.params.id);
    response.render('session', { title: page, lastPage: lastPage });
}

router.get('/:id', function(request, response) {
    'use strict';
    const lastPage = getLastpage(request.session.lastPage);
    request.session.lastPage = request.params.id;
    display(request, response, lastPage);
});

module.exports = router;
