var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Node Routes Page' });
});

router.get('/SimpleUser', function(request, response) {
  response.render('simple-user', { title: 'Node Routes Page' });
});

module.exports = router;
