var express = require('express');
var router = express.Router();
var fs = require('fs');

var getNine = require('../source/GetNine');
var addingMachine = require('../source/AddingMachine');

router.get('/', function(request, response) {
    'use strict';
    var html = fs.readFileSync(__dirname + '/../public/index.html');
    response.writeHeader(200, {
        'Content-Type': 'text/html'
    });
    response.write(html);
    response.end();
});

router.get('/getNine', function(request, response) {
    'use strict';
    console.log('getNine called');
    response.send({
        result: getNine.getNine()
    });
});

// With a get, the parameters are passed in request.query
router.get('/add', function(request, response) {
    'use strict';
    console.log('add get called');
    console.log(request.query);
    var operandA = parseInt(request.query.operandA);
    var operandB = parseInt(request.query.operandB);
    var result = addingMachine.myObject.add(operandA, operandB);
    response.send({
        result: result
    });
});

/* To handle a post, we have to add express.bodyParser, shown above
   Now our parameters come in on request.body */
router.post('/add', function(request, response) {
    'use strict';
    console.log('add post called');
    console.log(request.body);
    var operandA = parseInt(request.body.operandA);
    var operandB = parseInt(request.body.operandB);
    var result = addingMachine.myObject.add(operandA, operandB);
    response.send({
        result: result
    });
});

module.exports = router;
