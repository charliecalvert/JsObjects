const setServer = require('../set-server');
const nano = require('nano')(setServer.serverUrl);
// var nano = require('nano')('http://localhost:5984');
const menu = require('./menu');

var docName = 'bigNames';
var dbName = 'bcdata';

var readIt = function() {
    var prog = nano.db.use(dbName);
    prog.get(docName, { revs_info: true }, function(err, body) {
        if (!err) {
            console.log(body);
        } else {
            console.log(err);
        }
    });
};

function insert() {
    nano.db.create(dbName);
    var prog = nano.db.use(dbName);
    const doc = { firstName: 'Suzie', lastName: 'Higgins' };

    prog.insert(doc, docName, function(err, body) {
        if (!err) {
            console.log(body);
        } else {
            console.log(err);
        }
    });
}

const handleInput = function(option) {
    switch (option) {
        case 'show':
            readIt();
            break;

        case 'insert':
            insert();
            break;

        default:
            return;
    }
};

menu.showMenu(handleInput);
