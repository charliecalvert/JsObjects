var dump = function(value) {
	console.log(value);
	$('#myList').append('<li>' + value + '</li>');
};

function dumpOneStyle(elem, prop) {
	if (prop) {
		dump("    "+prop+" : "+computedStyle.getPropertyValue(prop)+"\n");
		return;
	}
}

function dumpAllStyles(elem,prop) {

	var computedStyle = window.getComputedStyle(elem,null);

	var len = computedStyle.length;

	for (var i=0;i<len;i++) { 
		var style = computedStyle[i];
		dump(style + " : " + computedStyle.getPropertyValue(style)+"\n");
	}
}

var dumpStyles = function() {
	var elem = document.getElementById("computedStyle");
	dumpAllStyles(elem);
};

$(document).ready(function() {
	$('#computedStyle').click(dumpStyles);
});

