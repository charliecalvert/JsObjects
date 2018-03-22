/*
window.onload = function() {
    'use strict';
    app.init();
};
*/

function appendToList(text, method) {
    var ul = document.getElementById("appList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(method + ": " + text));
    ul.appendChild(li);
}

$(document).ready(function() {
    'use strict';
    //app.init();
    app.init();
    appendToList(app.arrayAll.arrayConstructor(), "arrayConstructor");
    appendToList(app.arrayAll.mixedArray(), "mixedArray");
    appendToList(app.arrayAll.convertTextToArray("This is some text", "convertTextToArray"));
});
