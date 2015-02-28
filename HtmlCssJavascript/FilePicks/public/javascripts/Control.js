/**
 * New node file
 */

var Control = (function () {
    'use strict';

    var fileList = [];

    function Control() {
        document.getElementById('file').addEventListener('change', readFile, false);
        $('#bam').click(bam);
    }

    function readFile(evt) {
        'use strict';
        if (Modernizr.filereader) {
            var files = evt.target.files;
            var fileList = document.getElementById("fileList");
            for (var i = 0; i < files.length; i++) {
                var option = document.createElement("option");
                option.text = files[i].name;
                fileList.add(option);
            }

            var file = files[0];

            var reader = new FileReader();
            reader.onload = function () {
                console.log(this.result);
                var fileData = document.getElementById("fileData");
                fileData.value = this.result;
            };
            reader.readAsText(file);
        } else {
            alert("no file reader available on your browser");
        }
    }

    function bam() {
        $('#showData').load('/bam');
    }

    function addToDebug(message) {
        $('#debug').append('<li>' + message + '</li>');
    }

    function successCallback() {
        addToDebug('success');
    }

    function opt_errorCallback() {
        addToDebug('failure');
    }

    function getFileSystem() {
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

        window.requestFileSystem(type, size, successCallback, opt_errorCallback)
    }

    return Control;

})();


$(document).ready(function () {
    'use strict';
    new Control();
});