var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response) {
  response.send({result: 'User'});
});

/* GET users listing. */
router.get('/a(cat)?', function(request, response) {
    response.send({result: 'acat', request: request.query });
});

/* GET users listing. */
router.get('/:id', function(request, response) {
    response.send({result: 'UserId', request: request.query });
});


module.exports = router;
