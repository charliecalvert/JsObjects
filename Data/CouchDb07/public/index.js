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

var create = function() {
    fetch('/create')
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data, null, 4));
            showDebug('OK: ' + data.ok);
            showDebug('ID: ' + data.id);
            showDebug('REV: ' + data.rev);
        })
        .catch(err => {
            console.log(err);
        });
};

var showDebug = function(textToDisplay) {
    const debug = document.getElementById('debug');
    elfCode.appendToList(debug, textToDisplay);
};

window.onload = function() {
    const buttonRead = document.getElementById('buttonRead');
    const buttonCreate = document.getElementById('buttonCreate');
    buttonRead.onclick = readJson;
    buttonCreate.onclick = create;

    elfControls = {
        firstName: document.getElementById('firstName'),
        lastName: document.getElementById('lastName'),
        age: document.getElementById('age')

    };
};
