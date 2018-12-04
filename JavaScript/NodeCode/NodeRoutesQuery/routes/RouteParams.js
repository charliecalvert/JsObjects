var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
    console.log('QUERY', request.query);
    console.log('PARAMS', request.params);
    response.send({route: '/', result: 'success', query: request.query, params: request.params});
});

router.get('/cat', function (request, response) {
    console.log('QUERY', request.query);
    console.log('PARAMS', request.params);
    var id = request.params.id;
    response.send({
        route: '/' + id,
        result: 'success',
        query: request.query,
        params: request.params,
        id: request.params.id
    });
});

router.get('/a(cat)?', function (request, response) {
    console.log(request.query);
    response.send({route: '/a(cat)?', result: 'success', query: request.query, params: request.params});
});

/* GET users listing. */
router.get('/:id', function (request, response) {
    console.log(request.query);
    console.log(request.params);
    var id = request.params.id;
    response.send({
        route: '/' + id,
        result: 'success',
        query: request.query,
        params: request.params,
        id: request.params.id
    });
});

module.exports = router;
