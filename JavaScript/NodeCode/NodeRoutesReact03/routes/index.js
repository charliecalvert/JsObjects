var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'RestExpress' });
});

router.get('/foo', function(req, res) {
    'use strict';
    res.send({ title: 'RestExpress', query: req.query, params: req.params });
});

module.exports = router;
