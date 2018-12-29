/**
 * Created by charlie on 11/26/16.
 */

var servers = [
    'http://127.0.0.1:5984',
    'http://192.168.2.40:5984',
    'http://192.168.2.27:5984',
    'http://168.156.47.57:5984'
];
var serverIndex = 1;
var serverUrl = servers[serverIndex];
var dbName = 'elf_routes_design';
console.log('Middleware attaching to database on: ', serverUrl);
console.log('Using Databasse:', dbName);

module.exports.serverUrl = serverUrl;
module.exports.dbName = dbName;
