/**
 * Created by charlie on 10/20/15.
 */


var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
    res.render('json-ajax', { pageTitle: 'JSON Ajax', programTitle: 'Jade Mixin Complete' });
});

module.exports = router;

