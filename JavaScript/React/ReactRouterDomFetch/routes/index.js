const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/get-json', function (req, res) {
    'use strict';
    res.send({ result: 'Success' });
});


module.exports = router;
