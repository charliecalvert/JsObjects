/**
 * Created by charlie on 6/9/15.
 */

var mongoose = require('mongoose');

var connect = {

	connected: false,

	simpleConnect: function() {
		'use strict';
		console.log('Connecting with simple.');
		var url = 'mongodb://127.0.0.1:27017/elven';
		connect.connected = true;
		mongoose.connect(url);
		var db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function(callback) {
			connect.connected = true;
			console.log('Opened connection to mongo');
		});
	},

	// mongodb://<dbuser>:<dbpassword>@ds049848.mlab.com:49848/elvenlab01
	mlabConnect: function() {
		'use strict';
		console.log('Connecting with mlab.');
		connect.connected = true;
		var userName = 'foobar';
		var password = 'foo';
		var siteAndPort = 'ds049848.mongolab.com:49848';
		var databaseName = 'elvenlab01';
		var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
		console.log(url);
		mongoose.connect(url);

		// This part is optional
		var db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function(callback) {
			connect.connected = true;
			console.log('Opened connection to mongo');
		});
	},

	doConnection: function(useSimple) {
		'use strict';
		var connectType = useSimple || true;
		if (connectType) {
			connect.simpleConnect();
		} else {
			connect.mlabConnect();
		}
	}
};

module.exports = connect;
