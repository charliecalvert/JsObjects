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
        fetch('/read').then(function(response) {
            return response.json();
        }).then(function(data) {
            addNames(data.firstName, data.lastName, data.age);
        }).catch(function(err) {
            alert("error calling JSON. Try JSONLint or JSLint: " + err);
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
