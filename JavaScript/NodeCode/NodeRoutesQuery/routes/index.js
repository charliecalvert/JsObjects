var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'NodeRoutesQuery', author: "Charlie Calvert" });
});

module.exports = router;
