var fs = require('fs');
var mongoose = require('mongoose');

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

var Card = mongoose.model('magic-card', cardSchema);
var connected = false;
var totalCardsSaved = 0;
var numberOfCards = 0;

function doConnection() {
	var baseUrl = 'mongodb://';
	var userName = 'csc';
	var password = 'Re*lD*t*22#';
	var siteAndPort = 'ds049848.mongolab.com:49848';
	var databaseName = 'elvenlab01';
	var url = baseUrl + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
	console.log(url);
	mongoose.connect(url);
}

function insertCard(card) {
	if (!connected) {
		connected = true;
		doConnection();
	} 
	var cardModel = new Card({
		"layout": card.layout,
		"type": card.type,
		"types": card.types,
		"colors": card.colors,
		"multiverseid": card.multiverseid,
		"name": card.name,
		"subtypes": card.subtypes,
		"cmc": card.cmc,
		"rarity": card.rarity,
		"artist": card.artist,
		"power": card.power,
		"toughness": card.touchness,
		"manaCost": card.manaCost,
		"text": card.text,
		"imageName": card.imageName
	});
	
	cardModel.save(function(err) {
		console.log('saved: ', cardModel.name);
		totalCardsSaved++;
		if (totalCardsSaved === numberOfCards) {
			console.log(numberOfCards);
			mongoose.disconnect(); 
		}
	});
}

function writeData(set) {
	numberOfCards = set.cards.length
	for (var i = 0; i < set.cards.length; i++) {
		insertCard(set.cards[i]);
	}
}

fs.readFile('LEA.json', function(err, set) {
	if (err) throw err;
	set = JSON.parse(set);
	writeData(set);	
	console.log('ending all reads and writes.');
}); 
