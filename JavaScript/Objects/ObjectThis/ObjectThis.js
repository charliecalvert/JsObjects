function runMe() { 
	return this; 
}

var myObject = {
	runMe: function () {
		return this;
	}
}
	
function RunMe() {
	$('#test03').append(this instanceof RunMe);
}

$(document).ready(function() {
    "use strict";
    var functionContext = runMe();
    $('#test01').append(functionContext === window);
    
    var functionContext2 = myObject.runMe();
    $('#test02').append(functionContext2 === myObject);
    
    var functionContext3 = new RunMe();
	$('#test04').append(functionContext3 instanceof RunMe);   
});