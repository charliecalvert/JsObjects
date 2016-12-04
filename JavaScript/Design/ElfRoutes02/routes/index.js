var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        pageTitle: 'Home Page',
        programTitle: 'ElfRoutes02'
    });
});

router.get('/aboutText', function(request, response) {
    'use strict';
    response.send({
        ok: true,
        docs: 'Data from a database could be here'
    });
});

router.get('/user-form', function(request, response) {
    'use strict';
    console.log('user form');
    var result = request.query;
    console.log(result);
    response.send(result);
});

/* Generic Jade/Pug renderer */
router.get('/:id', function(request, response) {
    'use strict';
    response.render(request.params.id, {
        id: request.params.id
    });
});

module.exports = router;
