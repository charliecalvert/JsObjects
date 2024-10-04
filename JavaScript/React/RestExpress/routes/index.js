var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'RestExpress' });
});

router.get('/get-title', function(req, res) {
    'use strict';
    res.send({ title: 'RestExpress' });
});

module.exports = router;
