var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response) {
  response.send({route: '/', result: 'success',  request: request.query, params: request.params});
});

/* GET users listing. */
router.get('/a(cat)?', function(request, response) {
    response.send({route: '/a(cat)?', result: 'success', request: request.query, params: request.params });
});

/* GET users listing. */
router.get('/:id', function(request, response) {
    response.send({ route: '/:id', result: 'success', request: request.query, params: request.params, id: request.params.id });
});


module.exports = router;
