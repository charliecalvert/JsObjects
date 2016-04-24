var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  'use strict';
  res.render('index', { title: 'Elven Angular Directive 02' });
});

router.get('/:id', function(req, res, nest) {
  'use strict';
  res.render(req.params.id, { title: ' Angular Routes Calvert' });
});

module.exports = router;
