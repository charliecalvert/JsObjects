/**
 * New node file
 */

function readFile(evt) {
	'use strict';
	if (Modernizr.filereader) {
		var files = evt.target.files;
		var file = files[0];
		var reader = new FileReader();
		reader.onload = function() {
			console.log(this.result);
			var fileData = document.getElementById("fileData");
			fileData.value = this.result;
		};
		reader.readAsText(file);
	} else {
		alert("no file reader available on your browser");
	}
}

window.onload = function() {
	'use strict';
	document.getElementById('file').addEventListener('change', readFile, false);
};