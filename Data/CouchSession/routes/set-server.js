/**
 * Created by charlie on 11/26/16.
 */

var servers = ['http://127.0.0.1:5984',
    'http://192.168.2.19:5984',
    'http://192.168.2.20:5984',
    'http://168.156.41.96:5984'
];

var dbName = 'game_data_calvert';
var serverIndex = 2;
var serverUrl = servers[serverIndex];
console.log('Middleware attaching to database on: ', serverUrl);
console.log('Middleware attaching to database: ', dbName);

module.exports.serverUrl = serverUrl;
module.exports.dbName = dbName;
