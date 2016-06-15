var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
    response.send({result: 'succecss', description: 'home route'})
});

router.get('/some-function', function(request, response) {
    response.send({result: 'succecss', description: 'some function'})
});

router.get('/:id', function (request, response) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;