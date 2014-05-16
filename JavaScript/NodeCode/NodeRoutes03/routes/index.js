var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', {
		title : 'Express'
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

module.exports = router;
