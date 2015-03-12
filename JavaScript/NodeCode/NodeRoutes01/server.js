var express = require('express');
var app = express();
var fs = require('fs');

// For posts
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
var router = express.Router();
app.use('/', router);

router.get('/getNine', function(request, response) {
    'use strict';
    console.log('getNine called');
    response.send({
        "result": 9
    });
});

// With a get, the parameters are passed in request.query
router.get('/add', function(request, response) {
    'use strict';
    console.log('add get called');
    console.log(request.query);
    // var result = parseInt(request.query.operandA) + parseInt(request.query.operandB);
    response.send({
        "result": "bar"
    });
});

/* To handle a post, we have to add bodyParser, shown above
   Now our parameters come in request.body */
router.post('/add', function(request, response) {
    'use strict';
    console.log('add post called');
    console.log(request.body);
    var result = parseInt(request.body.operandA) + parseInt(request.body.operandB);
    response.send({
        "result": result
    });
});

router.get('/', function(request, response) {
    'use strict';
    var html = fs.readFileSync(__dirname + '/Public/index.html');
    response.writeHeader(200, {
        "Content-Type": "text/html"
    });
    response.write(html);
    response.end();
});

app.use("/", express.static(__dirname + '/Public'));

var port = process.env.PORT || 30025;
app.listen(port);
console.log('Listening on port :' + port);
