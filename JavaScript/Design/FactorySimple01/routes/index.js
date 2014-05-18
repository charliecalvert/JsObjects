var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {'use strict';
  res.render('index', { title: 'BoatBuilder' });
});

/* 
 * app.get('/', function(request, response) {
    'use strict';
    var html = fs.readFileSync(__dirname + '/index.html');
    response.writeHeader(200, {
        "Content-Type": "text/html"
    });
    response.write(html);
    response.end();
});
 */
module.exports = router;
