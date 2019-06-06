var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/worker', (request, response) => {
    'use strict';
    response.render('worker', {
        title: request.query.title
    });
});

module.exports = router;
