const request = require('supertest');
const app = require('../app.js');
const debug = require('debug')('awsbasics:test');
const utils = require('elven-code').elfUtils;

describe("Get the buckets", function() {
    'use strict';

    const options = {
        "pathToConfig": process.env.HOME + "/.config/aws-config.json",
        "reallyWrite": true,
        "bucketName": "bucket01.elvenware.com",
        "folderToWalk": "/home/charlie/Documents/TestCopy",
        "s3RootFolder": "TestCopy",
        "createFolderToWalkOnS3": true,
        "createIndex": false,
        "filesToIgnore": ["Thumbs.db", ".gitignore", "MyFile.html"]
    };

    fit('It should be able to call /get-hidden-boats', () => {

        return request(app)
            .get('/listBuckets' + utils.makeParams(options))
            .then(response => {
                debug('RESPONSE', Object.keys(response));
                debug('BODY', response.body[0]);
                expect(response.statusCode).toBe(200);
            });
    });

});
