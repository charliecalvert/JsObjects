/**
 * Created by charlie on 11/26/16.
 */

var servers = ['127.0.0.1:5984',
    '192.168.86.117:5984',
    '192.168.2.20:5984',
    '168.156.41.96:5984'
];

var dbName = 'game_data_calvert';
var serverIndex = 1;
var serverUrl = 'http://' + servers[serverIndex];
console.log('Middleware attaching to database on: ', serverUrl);
console.log('Middleware defaulting to database: ', dbName);

module.exports.serverUrl = serverUrl;
module.exports.userPassUrl = (userName, password) => {
    return 'http://' + userName + ':' + password + '@' + servers[serverIndex];
}
module.exports.dbName = dbName;
