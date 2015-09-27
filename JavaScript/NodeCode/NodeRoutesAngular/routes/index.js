var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Node Routes Angular' });
});

router.get('/SimpleUser', function(request, response) {
  response.render('simple-user', { title: 'Node Routes Angular' });
});

router.get('/:id', function(request, response) {
  response.render(request.params.id, { title: 'Node Routes Angular' });
});

module.exports = router;
