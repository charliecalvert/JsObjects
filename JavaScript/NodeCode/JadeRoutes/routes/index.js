var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'JadeRoutes' });
});

router.get('/:id', function (request, response) {
  'use strict';
  response.render(request.params.id, {
    title: 'ElfComponent'
  });
});


module.exports = router;
