/**
 * Created by charlie on 6/11/2015.
 */

var mongoose = require('mongoose');

var connect = {
    connected: false,

    doConnection: function() {
        connect.connected = true;
        var userName = 'csc';
        var password = 'Re*lD*t*22#';
        var siteAndPort = 'ds049848.mongolab.com:49848';
        var databaseName = 'elvenlab01';
        var url =
            'mongodb://' +
            userName +
            ':' +
            password +
            '@' +
            siteAndPort +
            '/' +
            databaseName;
        console.log(url);
        mongoose.connect(url);

        // This part is optional
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to mongo');
        });
    }
};

module.exports = connect;
