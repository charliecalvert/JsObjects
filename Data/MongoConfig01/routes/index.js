var express = require("express");
var router = express.Router();
var fs = require("fs");
var queryMongo = require("./QueryMongo").QueryMongo;

/*
 * GET home page.
 */

router.get("/", function(req, res, next) {
    "use strict";
    res.render("index", {
        title: "MongoConfig01"
    });
});

var collectionName = "MongoConfig";

router.get("/deleteData", function(request, response) {
    "use strict";
    console.log("Remove called");
    queryMongo.removeAll(response, collectionName);
});

function readAndInsertConfig(response) {
    "use strict";
    fs.readFile("ComplexConfig.json", "utf8", function(err, fileContent) {
        if (err) {
            console.log(err);
            response.send({
                Error: err
            });
        } else {
            console.log(fileContent);
            fileContent = JSON.parse(fileContent);
            queryMongo.insertIntoCollection(
                response,
                collectionName,
                fileContent
            );
            // response.send({ "result" : fileContent });
        }
    });
}

router.get("/insertConfig", function(request, response) {
    "use strict";
    readAndInsertConfig(response);
});

router.get("/read", function(request, response) {
    "use strict";
    console.log("read route called");
    console.log("request.query.collectionName: ", collectionName);
    var query = request.query.query;
    console.log(typeof query);
    console.log(query);
    queryMongo.getCollectionData(response, query, collectionName);
});

router.get("/runQuery", function(request, response) {
    "use strict";
    console.log("read route called");
    console.log("request.query.collectionName: ", collectionName);
    var query = request.query.query;
    console.log(typeof query);
    console.log(query);
    queryMongo.getCollectionData(response, query, collectionName);
});

router.get("/queryProject", function(request, response) {
    "use strict";
    console.log("queryProject route called: ", request.query);
    console.log("request.query.query: ", request.query.query);
    console.log("request.query.project: ", request.query.project);
    var query = request.query.query;
    console.log(typeof query);
    console.log(query);
    queryMongo.getCollectionProject(response, query, collectionName);
});

module.exports = router;
