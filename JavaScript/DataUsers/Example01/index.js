/**
 * @author Charlie Calvert
 * Developed in class, Prog 272, Feb 14, 2013
 */

function changer() { 'use strict';
    var divId = $('#select01 option:selected').attr("data-divIndex");
    $("#data01").load("data.html #" + divId);
}


$(document).ready(function() {"use strict";
    $("#test01").html("It works");    
    
    $("#data01").load("data.html #div01");
    $("#select01").on("change", changer);
}); 