/**
 * @author Charlie Calvert
 */


// From: http://www.nczonline.net/blog/2009/07/28/the-best-way-to-load-external-javascript/
// And quite frankly, everywhere else in the world. It is ubiquitous
function loadScript(url, callback){

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

window.onload = function() {
	loadScript("ScriptToLoad.js", function() {
		alert("Awagha, this is the callback");
	});
};
