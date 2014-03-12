var request = require('request');

describe("A Mongo Suite", function() { 'use strict';

    var server = 'http://localhost:30025/';

    beforeEach(function() {

    });

// "C:\\Src\\config\\config.json"

    it("Should get the buckets", function(done) {
        console.log("in get the buckets test");
        var data = {options: JSON.stringify({"pathToConfig": "C:\\Src\\config\\config.json"})};
        var serverString = server + "listBuckets";
        var url = {url: serverString, qs: data};
        request(url, function(error, response, body) {
            console.log("In get the buckets callback: ", body);
            if (error) {
                throw error;
            }
            body = JSON.parse(body);
            expect(body[0].substr(0, 6)).toEqual("Bucket");
            done();
        });
    });
});