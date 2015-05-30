var Control = (function() {

	// Constructor
	function Control() {
        var ajax = new elf.Ajax();
        var getHtml = new elf.GetHtml();
        var getMarkdown = new elf.GetMarkdown();
		var getBarFoo = new elf.GetBarFoo();
	}

	return Control;

}());

$(document).ready(function() {
	'use strict';
	var control = new Control();
});
