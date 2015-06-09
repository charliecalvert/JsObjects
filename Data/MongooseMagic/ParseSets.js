var fs = require('fs');
var mongoose = require('mongoose');

// Download magic the gathering sets of cards.
// wget http://mtgjson.com/json/AllSets.json

/* 
 * This program parses sets of MTG cards and stores the mongolab.
 * AllSets is structured like
 * {
 *    SetOne: {
 *          metaDataHere: ...
 *          allCards: [...]
 *    },
 *    SetTwo: {
 *          metaDataHere: ...
 *          allCards: [...]
 *    }, etc
 * }
 */

var cardSchema = mongoose.Schema({
	"layout": String,
	"type": String,
	"types": [String],
	"colors": [String],
	"multiverseid": Number,
	"name": String,
	"subtypes": [String],
	"cmc": Number,
	"rarity": String,
	"artist": String,
	"power": String,
	"toughness": String,
	"manaCost": String,
	"text": String,
	"imageName": String
});

var setsSchema = mongoose.Schema({
	"name": String,
	"code": String,
	"gathererCode": String,
	"magicCardsInfoCode": String,
	"releaseDate": String,
	"border": String,
	"type": String,
	"booster": [String],
	"cards": [cardSchema]
});


var MagicSet = mongoose.model('all-magic-set', setsSchema);
var connected = false;
var totalSetsSaved = 0;
var setNames = [];

function doConnection() {
	var userName = 'csc';
	var password = 'Re*lD*t*22#';
	var siteAndPort = 'ds049848.mongolab.com:49848';
	var databaseName = 'elvenlab01';
	var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
	console.log(url);
	mongoose.connect(url);
}

function insertSet(setName, data) {


	if (!connected) {
		connected = true;
		doConnection();
	}
	var set = new MagicSet({
		name: data.name,
		code: data.code,
		gatheringCode: data.gatheringCode,
		magicCardsInfoCode: data.magicCardsInfoCode,
		releaseDate: data.releaseDate,
		border: data.border,
		type: data.type,
		booster: data.booster,
		cards: data.cards
	});

	console.log('inserting', set.code);

	set.save(function(err) {
		console.log('saved: ', set.name);
		totalSetsSaved++;
		if (totalSetsSaved === setNames.length) {
			mongoose.disconnect();
			console.log(setNames.length);
		}
	});
}

function writeSetToFile(setName, data) {
	// Windows does not like the name CON so we rename it.
	if (setName === 'CON') {
		setName = 'CONOT';
	}
	fs.writeFile(setName + '.json', JSON.stringify(data, null, 4), function(err, data) {
		if (err) {
			console.log(err);
		} else {
			// console.log('Success');
		}
	});
}

function writeData(setName, data, writeToDisk, writeSets) {
	if (writeToDisk) {
		writeSetToFile(setName, data);
	}
	if (writeSets) {
		insertSet(setName, data);
	}
}

function insertData() {
	fs.readFile('AllSets.json', function(err, allSets) {
		if (err) throw err;
		var allSets = JSON.parse(allSets);
		for (var set in allSets) {
			if (allSets.hasOwnProperty(set)) {
				setNames.push(set);
			}
		}

		for (var i = 0; i < setNames.length; i++) {
			var setName = setNames[i];
			console.log(setName);
			writeData(setName, allSets[setName], true, true);
		}
		console.log('ending all reads and writes.');
	});
}

function search() {
	console.log('In search');
	if (!connected) {
		doConnection();
	}
	MagicSet.findOne({ 'code': 'LEA'}, function(err, arrayOfLea) {
		console.log('In array');
		console.log(err);
		console.log(arrayOfLea.cards[0]);
		mongoose.disconnect();
	});
}

insertData();
search();
