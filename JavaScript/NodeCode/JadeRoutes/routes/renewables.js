var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
    response.send({result: 'success', description: 'home renewables route from routes/renewables'})
});

router.get('/some-function', function(request, response) {
    response.send({result: 'success', description: 'some function in routes/renewables.js'})
});

router.get('/:id', function (request, response) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;
