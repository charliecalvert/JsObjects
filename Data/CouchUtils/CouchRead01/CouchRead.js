var couch = require('./Library/CouchCode');
var fs = require('fs');
var qs = require('querystring');

var dbName = 'couchdocs01';

function run() {
    var docName = process.argv[2];
    var fileName = process.argv[3];
    couch.couchCode.readDoc(docName, dbName, function(err, doc) {
        if (err === 200) {
            fs.writeFileSync(fileName, JSON.stringify(doc, null, 4));
        } else {
            console.log('could not find: ' + docName);
        }
    });
}

function explain() {
    console.log('\n\nPlease pass in the name of the document you want ');
    console.log('to retrieve from CouchDb and the file name you want');
    console.log('to use when you save the document.\n');
    console.log('Example: ');
    console.log('  node CouchDoc.js person01 "data/person01.json"');
}

if (process.argv.length === 4) {
    run();
} else {
    explain();
}
