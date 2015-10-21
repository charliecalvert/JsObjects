/**
 * Created by charlie on 10/20/15.
 */


var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
    res.render('json-ajax', { title: 'JSON Ajax' });
});

module.exports = router;

