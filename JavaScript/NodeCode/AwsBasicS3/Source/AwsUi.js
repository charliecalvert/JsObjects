//define(['jquery'], function() {
'use strict';

// var buttons = null;
var options = null;
var transformOptions = null;
var dataIndex = 0;
var dataIndexTransform = 0;
//const elfUtils = require('elven-code').elfUtils;
//import elvenCode from 'elven-code';
// const elfUtils = elvenCode.elfUtils;

function setClickFunction(id, func) {
    document.getElementById(id).onclick = func;
}

const makeParams = (params) => {
    var esc = encodeURIComponent;
    return '?' + Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
};

function AwsUi() {
    //const listBucketsAction = document.getElementById("listBuckets");
    //listBucketsAction.onclick = listBuckets;
    setClickFunction('listBuckets', listBuckets);
    setClickFunction('copyToS3', copyToS3);
    setClickFunction("getOptions", getOptions);
    setClickFunction("transformForwardButton", forwardTransform);
    setClickFunction("tranformBackButton", backwardTransform);
    setClickFunction("forwardButton", forward);
    setClickFunction("backButton", backward);
    setClickFunction("buildAll", buildAll);
    getBuildConfig();
    getOptions();
}

var buildAll = function () {
    $.getJSON("/buildAll", {
        options: JSON.stringify(transformOptions),
        index: dataIndexTransform
    }, function (result) {
        $("#buildData").empty();
        var fileArray = result.data.split("\n");
        for (var i = 0; i < fileArray.length; i++) {
            if (fileArray[i].length > 0) {
                $("#buildData").append("<li>" + fileArray[i] + "</li>");
            }
        }
    });
};

var copyToS3 = function () {

    fetch("/copyToS3" + makeParams(options[dataIndex]))
        .then(response => response.json())
        .then((json) => {
            document.getElementById("copyResult").textContent = "Result: " + json.result;
        })
        .catch((err) => {
            console.log(err);
        });
};

var displayTransformConfig = function (options) {
    $("#pathToPython").html(options.pathToPython);
    $("#copyFrom").html(options.copyFrom);
    $("#copyTo").html(options.copyTo);
    $("#filesToCopy").html(options.filesToCopy);
};

var displayOptions = function (options) {
    $("#currentDocument").html(dataIndex + 1);
    $("#pathToConfig").html(options.pathToConfig);
    $("#reallyWrite").html(options.reallyWrite ? "true" : "false");
    $("#bucketName").html(options.bucketName);
    $("#folderToWalk").html(options.folderToWalk);
    $("#s3RootFolder").html(options.s3RootFolder);
    $("#createFolderToWalkOnS3").html(options.createFolderToWalkOnS3 ? "true" : "false");
    $("#createIndex").html(options.createIndex ? "true" : "false");
    $("#filesToIgnore").html(options.filesToIgnore);
};

var getBuildConfig = function () {
    $.getJSON("/getBuildConfig", function (optionsInit) {
        transformOptions = optionsInit;
        displayTransformConfig(transformOptions[dataIndexTransform]);
    }).fail(function (a) {
        alert(JSON.stringify(a));
    });
};

var getOptions = function () {
    $.getJSON("/getOptions", function (optionsInit) {
        options = optionsInit;
        $('#documentCount').html(options.length);
        displayOptions(options[0]);
    }).fail(function (a) {
        alert(JSON.stringify(a));
    });
};

var forwardTransform = function () {
    if (dataIndexTransform < transformOptions.length - 1) {
        dataIndexTransform++;
        displayTransformConfig(transformOptions[dataIndexTransform]);
    }
};

var backwardTransform = function () {
    if (dataIndexTransform > 0) {
        dataIndexTransform--;
        displayTransformConfig(transformOptions[dataIndexTransform]);
        return dataIndexTransform;
    }
    return dataIndexTransform;
};

var forward = function () {
    if (dataIndex < options.length - 1) {
        dataIndex++;
        displayOptions(options[dataIndex]);
    }
};

var backward = function () {
    if (dataIndex > 0) {
        dataIndex--;
        displayOptions(options[dataIndex]);
        return true;
    }
    return false;
};

var listBuckets = function () {
    fetch('/listBuckets' + makeParams(options[dataIndex]))
        .then((response) => response.json())
        .then((data) => {
            $("#buckets").empty();
            if (Array.isArray(data)) {
                for (var i = 0; i < data.length; i++) {
                    $("#buckets").append("<li>" + data[i] + "</li>");
                }
            } else {
                $("#buckets").append(data.message);
            }
        });
    /*$.getJSON("/listBuckets", {
        options: JSON.stringify(options[dataIndex])
    }, function(data) {
        $("#buckets").empty();
        if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                $("#buckets").append("<li>" + data[i] + "</li>");
            }
        } else {
            $("#buckets").append(data.message);
        }
    });*/
};

AwsUi();
//});
