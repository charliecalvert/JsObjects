var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'basic-promise' });
});

router.get('/getName', function(req, res, next) { 'use strict';
    res.status(200).send({ "name": "tom" });
});

module.exports = router;
