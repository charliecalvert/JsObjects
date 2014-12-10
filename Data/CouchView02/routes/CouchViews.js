function views(router, nano, dbName) {
	
	function runTemplateView(templateName, request, response) {
		var templater = require('../Library/Templater');
		var nanoDb = nano.db.use(dbName);
		nanoDb.view(request.query.designDoc, request.query.view, function(err,
				body) {
			if (!err) {
				console.log(body);

				var result = [];
				body.rows.forEach(function(doc) {
					result.push(doc.value);
					console.log(doc.value);
				});
				var html = templater.template.addNames(templateName, result);
				response.send(html);
			} else {
				console.log(err);
				response.send(500, err);
			}
		});
	}

	/**
	 * @memberOf CouchViews
	 * @name View01 http://localhost:5984/couch_views/_design/states/_view/docBulk
	 */
	router.get('/viewBulkTemplate', function(request, response) {
		'use strict';
		console.log("viewDocBulk Called: " + request.query);
		runTemplateView('Templates/Basic.html', request, response);
	});
	
	router.get('/viewStateCapitalAngular', function(request, response) {
		console.log("viewStateCapitalAngular called.")
		var doc = request.query.designDoc;
		var view = request.query.view;
		var nanoDb = nano.db.use(dbName);
		nanoDb.view(doc, view, function(err,	body) {
			if (!err) {
				console.log(body);
				response.send(body);
			} else {
				console.log(err);
				response.send(500, err);
			}
		});
	});

	/**
	 * @memberOf CouchViews
	 */
	router.get('/viewStateCapitalTemplate', function(request, response) {
		'use strict';
		console.log("viewStateCapital Called: " + request.query);
		runTemplateView('Templates/StateCapital.html', request, response);
	});
	
	router.get('/viewBulk', function(request, response) {
		var nanoDb = nano.db.use(dbName);
		nanoDb.view(request.query.designDoc, request.query.view, function(err, body) {
			if (!err) {
				console.log(body);
				response.send(body);
			} else {
				console.log(err);
				response.send(500, err);
			}
		});
	});
	
	router.get('/viewOneDoc', function(request, response) {
		var nanoDb = nano.db.use(dbName);
		nanoDb.view(request.query.designDoc, request.query.view, function(err, body) {
			if (!err) {
				console.log(body);
				response.send(body);
			} else {
				console.log(err);
				response.send(500, err);
			}
		});
	});

}

module.exports = views;