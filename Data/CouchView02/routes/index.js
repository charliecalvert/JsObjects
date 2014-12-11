var router = require('./Couch');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Couch Views II' });
});

module.exports = router;
