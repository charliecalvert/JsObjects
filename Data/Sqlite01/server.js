var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(':memory:');

var db = null;

db = new sqlite3.Database('test01.db');

db.serialize(function() {
    db.run('CREATE TABLE IF NOT EXISTS test01 (firstName TEXT, lastName TEXT)');

    db.run('delete from test01');

    var stmt = db.prepare('INSERT INTO test01 VALUES (?, ?)');
    stmt.run('Antoni', 'Gaudí');
    stmt.run('David', 'Lawrence');

    stmt.finalize();

    db.each('SELECT rowid AS id, firstName, lastName FROM test01', function(
        err,
        row
    ) {
        console.log(row.id + ': ' + row.firstName + ' ' + row.lastName);
    });
});

db.close();
