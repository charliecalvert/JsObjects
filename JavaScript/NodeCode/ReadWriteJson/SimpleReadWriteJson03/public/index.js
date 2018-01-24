// import {writeJsonPrivate} from './writeJsonPrivate';

/*jshint jquery:true, browser:true, devel: true, strict: true */

const App = (function() {
    'use strict';

    function App() {
        $("#buttonRead").click(readJson);
        $("#buttonWrite").click(writeJson);
    }

    function addNames(initFirstName, initLastName, initAge) {
        $("#firstName").val(initFirstName);
        $("#lastName").val(initLastName);
        $("#age").val(initAge);
    }

    function readJson() {
        $.getJSON('/read', function(data) {
            addNames(data.firstName, data.lastName, data.age);
        }).success(function() {
            showDebug('success');
        }).error(function(jqXHR, textStatus, errorThrown) {
            alert("error calling JSON. Try JSONLint or JSLint: " + textStatus + ' ' + errorThrown);
        }).complete(function() {
            console.log("csc: completed call to get index.json");
        });
    }



    const writeJson = function() {
        writeJsonPrivate();
    };

    const showDebug = function(textToDisplay) {
        $("#debug").append('<li>' + textToDisplay + '</li>');
    };

    return App;

})();

$(document).ready(function() {
    'use strict';
    new App();
});
