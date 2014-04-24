/**
 * @author Charlie Calvert
 */

function error(xhr, xhrStatus) {
    'use strict';
    alert('Big xhr error: ' + xhr);
}

var getFile = function(fileName) {
    'use strict';
    var xhr = new XMLHttpRequest();
    xhr.open("GET", fileName, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.text = xhr.responseText;
                document.body.appendChild(script);
            }
        } else if (xhr.status == 404) {
            alert("File not found: " + fileName + " - " + xhr.status);
        }
    };
    xhr.onerror = function() {
        error(xhr, xhr.status);
    };
    xhr.send(null);
};

window.onload = function() {
    'use strict';
    getFile('ScriptToLoad.js');
};
