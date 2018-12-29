/**
 * @author Charlie Calvert
 */

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const loadConfig = require('./LoadConfig.js').loadConfig;
const argv = require('minimist')(process.argv.slice(2));

const QueryMongo = (function() {
    'use strict';

    let url = null;
    let that = null;
    let client = null;
    let database = null;
    let collectionName = 'lincoln';

    function QueryMongo() {
        console.log('Constructor called.');
        that = this;
    }

    QueryMongo.prototype.run = function(option) {
        loadConfig(function(urls) {
            const mongoTalkJson = JSON.parse(urls);
            url = mongoTalkJson.urls[mongoTalkJson.selectedUrl];
            console.log('The Mongo URL: ' + url);
            that.getData(option);
            console.log('Leaving loadConfig');
        });
    };

    const getDatabase = function(callback) {
        console.log('Called QueryMongo.getDatabase: ');
        if (database !== null) {
            console.log('database exists');
            if (database.openCalled === false) {
                console.log('calling open database');
                database.open(function(err, database) {
                    console.log('In database open callback');
                    if (err) {
                        console.log('found err');
                        throw err;
                    }
                    callback(database);
                });
            } else {
                callback(database);
            }
        } else {
            console.log('Querying for database: ' + url);
            MongoClient.connect(
                url,
                function(err, clientInit) {
                    assert.equal(null, err);
                    assert.ok(clientInit !== null);
                    client = clientInit;
                    database = client.db('test');
                    callback(database);
                }
            );
        }
    };

    QueryMongo.prototype.getData = function(option) {
        console.log('Called getData');

        if (option === 'insert') {
            insertCollection();
        } else if (option === 'remove') {
            removeCollection();
        } else {
            getCollection();
        }
        console.log('Leaving get data');
    };

    const insertCollection = function() {
        getDatabase(function(database) {
            const collection = database.collection(collectionName);
            const records = [];

            for (let count = 10000; count < 10005; count++) {
                const newRecord = {
                    firstName: 'Abe' + count,
                    lastName: 'Lincoln' + count,
                    address: count + ' Green Street',
                    city: 'Bellevue',
                    state: 'WA',
                    zip: 98002
                };
                records.push(newRecord);
            }
            // insertData(collection, records);
            collection.insert(records, function(err, docs) {
                if (err) {
                    throw err;
                } else {
                    console.log('Inserted: ' + JSON.stringify(docs, null, 4));
                    client.close();
                }
            });
            console.log('Leaving insert collection');
        });
    };

    const getCollection = function() {
        console.log('Get Collection Called');
        getDatabase(function(database) {
            const collection = database.collection(collectionName);

            collection.find().toArray(function(err, theArray) {
                console.dir(theArray);
                client.close();
            });
        });
    };

    const removeCollection = function() {
        getDatabase(function(database) {
            const collection = database.collection(collectionName);
            collection.remove(function(err) {
                if (err) {
                    throw err;
                }
                client.close();
            });
        });
    };

    return QueryMongo;
})();

function run(option) {
    const q = new QueryMongo();
    q.run(option);
}

if (argv.option) {
    console.log(argv.option);
    run(argv.option);
} else {
    console.log('Please pass in an option');
    console.log();
    console.log('  Usage: node CreateData.js --option=[OPTION]');
    console.log('    Options are: insert, show, remove ');
    console.log();
    console.log('  Examples: ');
    console.log('    node CreateData.js --option=show');
    console.log('    node CreateData.js --option=insert');
    console.log('    node CreateData.js --option=remove');
}
