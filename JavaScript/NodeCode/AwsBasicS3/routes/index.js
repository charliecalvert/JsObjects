var express = require('express');
var router = express.Router();
var fs = require("fs");
var s3Code = require("../Source/S3Code");
var walkDirs = require("../Source/WalkDirs").walkDirs;

/* GET home page. */
router.get('/', function (req, res) {
    'use strict';
    console.log('GET HOME PAGE CALLED');
    res.render('index', {
        title: 'Express'
    });
});

//app.get('/', routes.index);
//app.get('/AwsCopy', routes.AwsCopy);
//app.get('/users', user.list);

/*
 * You will need to edit one or more objects in Options.json.
 * They have this general format

var options = {
		pathToConfig: process.env.HOME + '/.config/aws-config.json',
		reallyWrite: true,
		bucketName: 'bucket01.elvenware.com',
		folderToWalk: "Files",
		s3RootFolder: "FilesTwo",
		createFolderToWalkOnS3: true,
		createIndex: true,
		filesToIgnore: ['Thumbs.db', '.gitignore', 'MyFile.html']
};

 * Before filling it out, see the README file for this project.
 */


router.get('/getOptions', function (request, response) {
    'use strict';
    var options = fs.readFileSync(__dirname + "/Options.json", 'utf8');
    options = JSON.parse(options);
    options[0].pathToConfig = process.env.HOME + options[0].pathToConfig;
    response.send(options);
});

router.get('/listBuckets', function (request, response) {
    'use strict';
    console.log("LISTBUCKETS CALLED", request.query);
    var options = request.query;
    console.log('OPTIONS', options);
    console.log("ListBuckets Path to Config: ", options.pathToConfig);
    try {
        if (s3Code.loadConfig(options.pathToConfig)) {
            console.log('LOADED CONFIG ABOUT TO CALL S3CODE LISTBUCKETS');
            s3Code.listBuckets(response, true);
        } else {
            console.log("There was an error in listBuckets");
            var msg = "Could not load: " + options.pathToConfig;
            response.send({
                result: "error",
                "message": msg
            });
        }
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});

router.get('/copyToS3', function (request, response) {
    'use strict';
    const options = request.query;
    console.log('COPY TO S3 OPTIONS', options);
    try {
        walkDirs(options, response);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});

var buildAll = function (response, config, index) {
    'use strict';
    console.log("BuildAll was called");
    var command = config[index].pathToPython + " " + __dirname + "/MarkdownTransform.py -m " + __dirname + "/MarkdownTransformConfig.json" + " -i " + index;
    try {
        exec(command, function callback(error, stdout, stderr) {
            // Read in the HTML send the HTML to the client
            console.log("convertToHtml was called er: ", error);
            console.log("convertToHtml was called so: ", stdout);
            console.log("convertToHtml was called se: ", stderr);
            response.send({
                "result": "Success",
                "data": stdout
            });
        });
    } catch (e) {
        console.log(e.message);
        response.send({
            "result": "error",
            "data": e
        });
    }
};

router.get('/buildAll', function (request, response) {
    'use strict';
    console.log("buildAll called");
    console.log(typeof request.query.options);
    console.log(request.query.options);
    // Let's just start writing this out, as we are going to need to do it eventually.
    var options = JSON.parse(request.query.options);
    fs.writeFile(__dirname + "/MarkdownTransformConfig.json", JSON.stringify(options, null, 4), function (err, data) {
        if (err) {
            console.log(data);
            throw err;
        }
        buildAll(response, options, request.query.index);
    });
    // buildAll(response, options, request.query.index);
});

router.get('/getBuildConfig', function (request, response) {
    'use strict';
    console.log('getBuildConfig CALLED');
    const fileName = __dirname + "/transform/MarkdownTransformConfig.json";
    try {
        var options = fs.readFileSync(fileName, 'utf8');
    } catch (error) {
        console.log(error);
        console.log('CAN NOT OPEN', fileName);
        response.send(error);
    }
    options = JSON.parse(options);
    console.log('GET BUILD CONFIG OPTIONS', options);
    response.send(options);
});

module.exports = router;
