/**
 * @author Charlie Calvert
 */


// From: http://www.nczonline.net/blog/2009/07/28/the-best-way-to-load-external-javascript/
// That is Nicholas C. Zakas and I found it in his book on JavaScript Performance 
// ISBN 9780596802790
function loadScript(url, callback) {
    'use strict';

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) { //IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function() {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

window.onload = function() {
    'use strict';
    loadScript("ScriptToLoad.js", function() {
        alert("Awagha, this is the callback");
    });
};
