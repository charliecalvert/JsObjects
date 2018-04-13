
const app = require('./app');

function appendToList(text, method) { 'use strict';
    const ul = document.getElementById("appList");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(method + ": " + text));
    ul.appendChild(li);
}

window.onload = function() {
    'use strict';
    app.init();
    appendToList(app.arrayAll.arrayConstructor(), "arrayConstructor");
    appendToList(app.arrayAll.mixedArray(), "mixedArray");
    appendToList(app.arrayAll.convertTextToArray("This is some text", "convertTextToArray"));
};