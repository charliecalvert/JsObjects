var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send([{ name: 'user1' }, { name: 'user2' }]);
});

module.exports = router;
