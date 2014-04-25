/**
 * @author Charlie
 */

function changer() {'use strict';
    var divId = $('#select01 option:selected').attr("data-divIndex");
    $("#data01").load("data.html #" + divId);
}


$(document).ready(function() {"use strict";
    $("#test01").html("It works");
    // var selects = ["#select01", "#select02"];
    
    var usePresident = function(i, president) {
            $('#data01').append("<p>" + president.firstName + ' ' + president.lastName + "</p>");
     };
     
    $.getJSON("index.json", function(json) {
        $.each(json, usePresident);
    }).success(function() {
			console.log("csc: success. Loaded index.json");
		}).error(function(jqXHR, textStatus, errorThrown) {
			alert("error calling JSON:" + errorThrown + ". Try JSONLint or JSLint: " + textStatus);
		}).complete(function() {
			console.log("csc: completed call to get index.json");
		});
}); 