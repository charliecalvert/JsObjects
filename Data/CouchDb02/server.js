const request = require('request');
const setServer = require('../set-server');
const server = setServer.serverUrl + '/';
const menu = require('./menu');

console.log('CouchDb02 Using: ' + server + '\n');

function basics() {
    request(server, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log('BODY:', body);
        } else {
            console.log(error);
        }
    });
}

const availableDatabases = () => {
    console.log('Available databases:\n');
    request(server + '_all_dbs', function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

function stats() {
    const server = setServer.userPassUrl('admin', 'foo');
    const uri = server + '/_node/_local/_stats';
    console.log('stats', uri);

    request(uri, function(error, response, body) {
        console.log('Status Code', response.statusCode);
        if (!error && response.statusCode === 200) {
            console.log(typeof body);
            var data = JSON.parse(body);
            console.log(JSON.stringify(data, null, 4));
        } else {
            console.log('ERROR', response.statusCode, error);
        }
    });
}

const handleInput = function(option) {
    switch (option) {
        case 'basics':
            basics();
            break;

        case 'available':
            availableDatabases();
            break;

        case 'stats':
            stats();
            break;

        default:
            return;
    }
};

menu.showMenu(handleInput);
