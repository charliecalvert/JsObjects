let elfControls = null;

function addNames(initFirstName, initLastName, initAge) {
    'use strict';


    elfControls.firstName.value = initFirstName;
    elfControls.lastName.value = initLastName;
    elfControls.age.value = initAge;
}

function readJson() {
    fetch('/read')
        .then(response => response.json())
        .then(data => addNames(data.firstName, data.lastName, data.age))
        .catch(err => {
            console.log(err);
        });
}

var writeJson = function() {

    var userInput = {
        firstName: elfControls.firstName.value,
        lastName: elfControls.lastName.value,
        age: elfControls.age.value
    };

    fetch('/write', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInput) } )
        .then(response => response.json())
        .then(data => showDebug(data.result))
        .catch(err => showDebug(err))

};

var showError = function(request, ajaxOptions, thrownError) {
    showDebug('Error occurred: = ' + ajaxOptions + ' ' + thrownError);
    showDebug(request.status);
    showDebug(request.statusText);
    showDebug(request.getAllResponseHeaders());
    showDebug(request.responseText);
};

var showDebug = function(textToDisplay) {
    const debug = document.getElementById('debug');
    elfCode.appendToList(debug, textToDisplay);
    //$('#debug').append('<li>' + textToDisplay + '</li>');
};

window.onload = function() {
    const buttonRead = document.getElementById('buttonRead');
    const buttonWrite = document.getElementById('buttonWrite');
    buttonRead.onclick = readJson;
    buttonWrite.onclick = writeJson;

    elfControls = {
        firstName: document.getElementById('firstName'),
        lastName: document.getElementById('lastName'),
        age: document.getElementById('age')

    };
};
