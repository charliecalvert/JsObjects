/**
 * New node file
 */

var fileList = [];

function readFile(evt) {
	'use strict';
	if (Modernizr.filereader) {
		var files = evt.target.files;
		var fileList = document.getElementById("fileList");
		for (var i = 0; i < files.length; i++) {
			var option = document.createElement("option");
			option.text = files[i].name;
			fileList.add(option);
		}
		
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