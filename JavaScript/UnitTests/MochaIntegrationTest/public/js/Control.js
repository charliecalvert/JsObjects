/**
 * Created by charliecalvert on 2/23/15.
 */

function errorHandler(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    $('#debug').html("Request Failed: " + err);
}

function getScientists(callback) {
    var result = $.getJSON('./Scientists.json', callback);
    result.fail(errorHandler);
}

function initialize() {

    $("#getFive").click(function() {
        $(five).html(5);
    });

    function display(result) {
        console.log(result);
        $("#jsonDisplay").empty();
        $.each(result, function(index, bar) {
            $("#jsonDisplay").append(
                // '<li class="list-group-item" id="jsonListItem' + index +'">' +
                '<li class="list-group-item">' +
                bar.firstName + ' ' + bar.lastName +
                '</li>');
        });
    }

    $('#getScientists').click(function() {
        getScientists(display);
    });
}

$(document).ready(function() {
    initialize();
});