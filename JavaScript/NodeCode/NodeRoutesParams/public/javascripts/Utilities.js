/**
 * New node file
 */

var elf = {};

elf.utilities = {

	createRadio : function(displayString, id) {
		var objDiv = document.getElementById("radioDiv");
		var radioItem = document.createElement("input");
		radioItem.type = "radio";
		radioItem.name = "radioGrp";
		radioItem.id = id;
		radioItem.value = displayString;
		var objTextNode = document.createTextNode(displayString);
		var objLabel = document.createElement("label");
		objLabel.htmlFor = radioItem.id;
		objLabel.appendChild(radioItem);
		objLabel.appendChild(objTextNode);
		objDiv.appendChild(objLabel);
		var newSpan = document.createElement('hr');
		objDiv.appendChild(newSpan);
	},

    showMessage: function(message, clear) {
        if (clear) {
            $("#display").empty();
        }
        $('#display').append('<li>' + message + '</li>');
    },

    showDebug:  function(textToDisplay, clear) {
        if (clear) {
            $("#debug").empty();
        }
        $("#debug").append('<li>' + textToDisplay + '</li>');
    }
};
