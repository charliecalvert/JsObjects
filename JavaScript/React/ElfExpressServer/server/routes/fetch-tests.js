/*
 * For use with React Fetch Tests example which is here:
 * https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/React/ReactFetchTests
 */
var express = require('express');
var router = express.Router();

/* This method is used by ReactFetchTests found in the JsObjects React directory */
router.get('/get-info', (request, response) => {
    response.send({'result': 'success'});
});

/* This method is used by ReactFetchTests found in the JsObjects React directory */
router.get('/numbers', (request, response) => {
    response.send({
        "numbers": [
            "One",
            "Two",
            "Three"
        ]
    });
});

module.exports = router;
