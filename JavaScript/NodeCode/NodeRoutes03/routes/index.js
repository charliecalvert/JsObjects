var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', {
		title : 'NodeRoutes03'
	});
});

router.get('/sayHello', function(request, response) {
	response.send({
		"result" : "Success calling sayHello in from routes/index.js"
	});
});

router.get('/getFullName', function(request, response) {
	var queryObject = request.query
	var queryAsString = JSON.stringify(request.query);
	console.log("Read called: " + queryAsString);
	response.send({
		"fullName" : queryObject.firstName + ' ' + queryObject.lastName,
		original : queryObject
	});
});

router.get('/pageInsert', function(request, response) {
    response.render('PageInsert', {
        param01 : 'PageInsert'
    });
});

router.get('/pageWithDivs', function(request, response) {
    response.render('PageWithDivs', {
        param01 : 'PageWithDivs01',
        param02 : 'PageWithDivs02'
    });
});

router.get('/jadeWithMarkdown', function(request, response) {
    response.render('JadeWithMarkdown');
});

module.exports = router;
