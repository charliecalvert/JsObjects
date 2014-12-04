var router = require('./Couch');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ViewsInsertBulk' });
});

module.exports = router;
