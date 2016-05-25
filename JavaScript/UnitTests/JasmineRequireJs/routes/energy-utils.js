/**
 * Created by charlie on 5/11/16.
 */

function objectToArray(obj) {
    'use strict';
    // Write your code here
    //console.log(obj);

    var objectAsArray = [];
    for (var key in obj) {
        // console.log(obj[key]);
        objectAsArray.push([key, obj[key]]);
    }

    objectAsArray.sort(function(a, b) {
        return a[1] > b[1];
    });
    return objectAsArray;
}

module.exports.objectToArray = objectToArray;
