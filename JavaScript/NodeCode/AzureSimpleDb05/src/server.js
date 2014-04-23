/* jshint jquery: true, node: true */

var express = require('express');
var simpledb = require('simpledb');
var app = express();
var fs = require('fs');
var utils = require('./public/javascripts/utilities').utils;
var coreData = { Domain: 'History', Category: 'Presidents02' };

var keys = utils.readKeyFile();

var sdb = new simpledb.SimpleDB({
	keyid : keys[0],
	secret : keys[1]
});
var port = process.env.port || 30025;

app.get('/', function(request, result) {
	var html = fs.readFileSync('public/index.html');
	result.writeHeader(200, {
		"Content-Type" : "text/html"
	});
	result.write(html);
	result.end();
});

app.get('/testAzureSimpleDb', function(request, result) {
	var html = fs.readFileSync('public/testAzureSimpleDb.html');
	result.writeHeader(200, {
		"Content-Type" : "text/html"
	});
	result.write(html);
	result.end();
});

app.get('/listDomains', function(request, result) {
	// console.log('request called');
	sdb.listDomains(function(error, resultSdb, metadata) {
		if (error) {
			result.send('listDomains failed: ' + error.Message);
			console.log(resultSdb, metadata);
		} else {
			result.send(resultSdb);
		}
	});
});

app.get('/listItems', function(request, result) {
	sdb.select('select ItemName from History', function(error, queryResult,	metadata) {
		if (error) {
			result.send('history query failed: ' + error.Message);
			console.log(metadata);
		} else {
			result.send(queryResult);
		}
	});
});

app.get('/history', function(request, result) {
	sdb.select('select * from History where Category="' + coreData.Category + '"', function(error, queryResult, metadata) {
		if (error) {
			console.log(metadata);
			result.send('history query failed: ' + error.Message);
		} else {
			result.send(queryResult);
		}
	});
});

app.get('/deleteDomain', function(request, result) {
	sdb.deleteDomain(coreData.Domain, function(error, queryResult, metadata) {
		if (error) {
			console.log(metadata);
			result.send('history query failed: ' + error.Message);
		} else {
			result.send(queryResult);
		}
	});
});

app.get('/createDomain', function(request, result) {
	createDomain(coreData.Domain, result);
});

function createDomain(domainName, result)
{
	sdb.createDomain(domainName, function(error, queryResult, metadata) {
		if (error) {
			result.send('DomainFCreationFailed: ' + error.Message);
		} else {
			result.send( { success: 'Success', metadata: metadata } );
		}
	});
}

app.get('/addListOfPresidents', function(request, result) {
	createDomain(coreData.Domain, result);
	var items = [{
		$ItemName: utils.getUuid(),
		Category : coreData.Category,
		FirstName : 'George',
		MiddleName : '',
		LastName : 'Washington',
		Sequence : '01'
	},{
		$ItemName: utils.getUuid(),
		Category : coreData.Category,
		FirstName : 'John',
		MiddleName : '',
		LastName : 'Adams',
		Sequence : '02'
	},{
		$ItemName: utils.getUuid(),
		Category : coreData.Category,
		FirstName : 'Thomas',
		MiddleName : '',
		LastName : 'Jefferson',
		Sequence : '03'
	},{
		$ItemName: utils.getUuid(),
		Category : coreData.Category,
		FirstName : 'James',
		MiddleName : '',
		LastName : 'Madison',
		Sequence : '04'
	},{
		$ItemName: utils.getUuid(),
		Category : coreData.Category,
		FirstName : 'James',
		MiddleName : '',
		LastName : 'Monroe',
		Sequence : '05'
	},{
		$ItemName: utils.getUuid(),
		Category : coreData.Category,
		FirstName : 'John',
		MiddleName : 'Quincy',
		LastName : 'Adams',
		Sequence : '06'
	}];

	sdb.batchPutItem(coreData.Domain, items, function(error, putItemResult, metadata) {
		if (error) {
			console.log(error);
			return { result : "Error" };
		} else {
			return { result : "Success", metadata: metadata	};
		}
	});

	/* putItem('Andrew', 'Jackson');
	putItem('Martin Van', 'Buren');
	putItem('William Henry', 'Harrison');
	putItem('John', 'Tyler');
	putItem('James K.', 'Polk');
	putItem('Zachary', 'Taylor');
	putItem('Millard', 'Fillmore');
	putItem('Franklin', 'Pierce');
	putItem('James', 'Buchanan');
	putItem('Abraham', 'Lincoln');
	putItem('Andrew', 'Johnson');
	putItem('Ulysses S.', 'Grant');
	putItem('Rutherford B.', 'Hayes');
	putItem('James', 'Garfield');
	putItem('Chester A.', 'Arthur');
	putItem('Grover', 'Cleveland');
	putItem('Benjamin', 'Harrison');
	putItem('William', 'McKinley');
	putItem('Theodore','Roosevelt');
	putItem('William Howard', 'Taft');
	putItem('Woodrow', 'Wilson');
	putItem('Warren G.', 'Harding');
	putItem('Calvin', 'Coolidge');
	putItem('Herbert', 'Hoover');
	putItem('Franklin D.', 'Roosevelt');
	putItem('Harry S.', 'Truman');
	putItem('Dwight D.', 'Eisenhower');
	putItem('John F', 'Kennedy');
	putItem('Lyndon B.','Johnson');
	putItem('Richard','Nixon');
	putItem('Gerald','Ford');
	putItem('Jimmy','Carter');
	putItem('Ronald','Reagan');
	putItem('George', 'Bush');
	putItem('Bill','Clinton');
	putItem('George W.', 'Bush');
	putItem('Barack','Obama'); */

});


app.get('/putitem', function(request, result) {
	console.log(request.query.firstName);
	console.log(request.query.middleName);
	console.log(request.query.lastName);
	outcome = putItem(request.query.firstName,
			request.query.middleName,
			request.query.lastName);
	result.send(outcome);
});

app.get('/update', function(request, result) {
	console.log('Update Called');
	var uuid = request.query.uuid;
	var firstName = request.query.firstName;
	var middleName = request.query.middleName;
	middleName = (middleName.trim().length === 0) ? '-' : middleName;
	lastName = request.query.lastName;
	console.log(uuid);
	console.log(firstName);
	console.log(middleName);
	console.log(lastName);
	result.send(updateOrInsert(coreData.Domain, uuid, coreData.Category, firstName, middleName, lastName));
});

function putItem(firstName, middleName, lastName) {
	uuid = utils.getUuid();
	console.log(uuid);
	return updateOrInsert(coreData.Domain, uuid, coreData.Category, firstName, middleName, lastName);
}

function updateOrInsert(domain, uuid, category, firstName, middleName, lastName) {
	sdb.putItem(coreData.Domain, uuid, {
		Category : category,
		FirstName : firstName,
		MiddleName: middleName,
		LastName : lastName
	}, function(error, putItemResult, meta) {
		if (error) {
			console.log(error);
			return { result : "Error" };
		} else {
			return { result : "Success", putItemResult: putItemResult, metadata: meta };
		}
	});
}

app.get('/getitem', function(request, result) {
	console.log(request.query.itemName);
	sdb.getItem('History', request.query.itemName, function(error,
			getItemResult) {
		if (error) {
			console.log(error);
		} else {
			console.log(getItemResult);
			result.send(getItemResult);
		}
	});
});

app.get('/delete', function(request, result) {
	console.log(request.query.itemName);
	result.send(deleteItem(request.query.itemName));
});

function deleteItem(item) {
	sdb.deleteItem(coreData.Domain, item, function(error,	getItemResult, meta) {
		if (error) {
			console.log(error, meta);			
		} else {
			console.log(getItemResult);
			return getItemResult;
		}
	});
}

app.get('/deleteAll', function(request, result) {
	getItemsToDelete(result);
});

function getItemsToDelete(result) {
	sdb.select('select ItemName from History where Category="' + coreData.Category + '"',
			function(error, queryResult) {
				if (error) {
					result.send({ failure : error.Message });
				} else {
					var itemsToDelete = [];
					var numItems = queryResult.length;
					// We are only allowed to delete 25 items at a time.
					if (numItems > 25) numItems = 24;
					for (var i = 0; i < numItems; i++)
					{
						itemName = queryResult[i][$ItemName];
						//console.log(itemName);
						var deleteItem = { $ItemName : itemName };
						itemsToDelete.push(deleteItem);
					}
					batchDelete(itemsToDelete, result);
				}
			});
}

function batchDelete(itemsToDelete, result) {
	//console.log("About to delete these items: ");
	// console.log(itemsToDelete);
	sdb.batchDeleteItem(coreData.Domain, itemsToDelete, function(error, queryResult, metadata) {
		if (error) {
			console.log(error.Message);
			result.send(error.Message);
		} else {
			//console.log( { result: 'Success' } );
			result.send({ result: 'Success', queryResult: queryResult, metadata: metadata });
		}
	});
}

app.get('/domainmeta', function(request, result) {
	sdb.domainMetadata(coreData.Domain, function(error, queryResult, metadata) {
		if (error) {
			console.log(error);
			// result.send('listDomains failed: '+ error.Message );
		} else {
			console.log(queryResult, metadata);
			result.send(queryResult);
		}
	});
});

app.get('/dirname', function(request, result) {
	result.send({
		'result' : __dirname
	});
});

app.get('/port', function(request, result) {
	result.send({
		'result' : port
	});
});

app.use(express.static(__dirname + '/public'));

app.listen(port);
