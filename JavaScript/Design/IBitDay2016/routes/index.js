var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', { title: 'ibit01' });
});

router.get('/:id', function(request, response, next) {
    'use strict';
    response.render(request.params.id, { title: 'ibit01' });
});

module.exports = router;
