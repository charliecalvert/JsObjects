var router = require('./Couch');

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        pageTitle: 'Main Page',
        programTitle: 'ElfRoutes01'
    });
});

router.get('/user-form', function(request, response) {
    'use strict';
    console.log('user form');
    var result = request.query;
    console.log(result);
    response.send(result);
});

/* Generic Jade/Pug Renderer */
router.get('/:id', function(request, response) {
    'use strict';
    response.render(request.params.id, {
        id: request.params.id
    });
});

module.exports = router;
