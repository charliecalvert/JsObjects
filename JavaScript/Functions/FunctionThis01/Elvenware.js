function Elvenware() {
    'use strict';

	var privateFunction = function() {
		$("#privateText").html("Private function called");
	};
	
    this.test = function() {
        console.log("Test called.");
        $("#testText").html("Test called");
    };

    Elvenware.prototype.useWrite = function UseWrite() {
    	$("#useWriteText").html("useWrite Called");
        console.log("Writing to the console.");
    };
    
  	$("#testButton").click(this.test);
	$("#useWriteButton").click(this.useWrite);
	$('#privateFunctionButton').click(privateFunction);    
}

$(document).ready(function() {
    'use strict';    
    
    var elvenware = new Elvenware();    
});
