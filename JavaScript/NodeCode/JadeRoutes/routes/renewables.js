var express = require('express');
var router = express.Router();

router.get('/:id', function (request, response) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;