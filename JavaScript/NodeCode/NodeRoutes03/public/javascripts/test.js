function addNames(initFirstName, initLastName) {
	'use strict';

	var script = $("#nameItem").html(), template = Handlebars.compile(script);

	var result = template({
		firstName : initFirstName,
		lastName : initLastName
	});

	$("#nameDiv").append(result);
}

function createRadio(which, displayString) {
    var objDiv = document.getElementById("radioDiv");
    var radioItem = document.createElement("input");
    radioItem.type = "radio";
    radioItem.name = "radioGrp";
    radioItem.id = "rad" + which;
    radioItem.value = "myradio + which";
    var objTextNode = document.createTextNode(displayString);
    var objLabel = document.createElement("label");
    objLabel.htmlFor = radioItem.id;
    objLabel.appendChild(radioItem);
    objLabel.appendChild(objTextNode);
    objDiv.appendChild(objLabel);
    var newSpan = document.createElement('hr');
    objDiv.appendChild(newSpan);
}

function parse() {
	'use strict';

    createRadio("", "Garply");
    createRadio("", "Qux");  
    var objectToSendFromClientToServer = {"firstName": "Qux", "lastName": "Garply"};
	$.getJSON('/getFullName', objectToSendFromClientToServer, function(data) {
        $("#debug").html(JSON.stringify(data.result));
        console.log(data);
	}).success(function() {
		console.log("csc: success. Loaded index.json");
	}).error(
			function(jqXHR, textStatus, errorThrown) {
				alert("error calling JSON. Try JSONLint or JSLint: "
						+ textStatus + errorThrown);
			}).complete(function() {
		console.log("csc: completed call to get index.json");
	});
}

function parseWithAjax() {
	'use strict';

	var jqxhr = $.ajax({
		type : 'GET',
		url : '/read',
		dataType : 'json',		
		success : function(data) {
            alert(data);
		},
		error : function(request, ajaxOptions, thrownError) {
			showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
			showDebug(request.status);
			showDebug(request.statusText);
			showDebug(request.getAllResponseHeaders());
			showDebug(request.responseText);
		}
	});
}

var showDebug = function(textToDisplay) {
    $("#debug").append('<li>' + textToDisplay + '</li>');
};

$(document).ready(function() {
	'use strict';
	$("#buttonParseGetJson").click(parse);
	$("#buttonParseAjax").click(parseWithAjax);
});
