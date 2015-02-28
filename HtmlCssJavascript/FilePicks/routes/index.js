var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) {
  response.render('index', { title: 'Hetml5 Files' });
});

router.get('/bam', function(request, response) {
    console.log('bam is called');
    // response.send({foo: 'foo'});
    response.render('test');
});

module.exports = router;
