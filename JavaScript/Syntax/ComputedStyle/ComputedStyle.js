var dump = function(value) {
	console.log(value);
	$('#myList').append('<li>' + value + '</li>');
};

function dumpComputedStyles(elem,prop) {

	var cs = window.getComputedStyle(elem,null);

	if (prop) {
		dump("    "+prop+" : "+cs.getPropertyValue(prop)+"\n");
		return;
	}

	var len = cs.length;
	for (var i=0;i<len;i++) { 
		var style = cs[i];
		dump("    "+style+" : "+cs.getPropertyValue(style)+"\n");
	}
}

var dumpStyles = function() {
	var elem = document.getElementById("computedStyle");
	dumpComputedStyles(elem);
};

$(document).ready(function() {
	$('#computedStyle').click(dumpStyles);
});

