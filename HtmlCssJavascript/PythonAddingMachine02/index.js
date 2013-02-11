var cgiPath = "/cgi-bin/AddingMachine02/"
var addingDataXml = cgiPath + "AddingDataXml.py"
var readingDataXml = cgiPath + "AddingMachineDataReaderXml.py"

function addNumbersXml()
{
    var operanda = $("#operanda").val();
    var operandb = $("#operandb").val();
    var answer = parseInt(operanda) + parseInt(operandb);
    if (isNaN(answer)) {
    	$("#result").addClass("red");
    	$("#result").html("Please enter two numbers.");
    }
   	else {
   		$("#result").removeClass("red");
    	$("#result").html(answer);
    	readFromAddingXml(operanda, operandb, answer)
   	}
}

function readFromAddingXml(operanda, operandb, answer)
{
    $("#items").empty();
    $("#debug").empty();
    dataRequest = "operanda=" + operanda + "&operandb=" + operandb + "&answer=" + answer;
    request = $.ajax(
    {
        type: "POST",
        data: dataRequest,
        url: addingDataXml,
        dataType: "xml",
        success: function (xml) {
            $(xml).find('addition').each(function () {
                var first = $(this).find('operanda').text();
                var last = $(this).find('operandb').text();
                var answer = $(this).find('answer').text();
                var additions = first + "+" + last + "=" + answer;
                $("#items").append("<li class='tulsa'>" + additions + "</li>");
            });
        },
        error: function(request, ajaxOptions, thrownError) {
            showDebug("Error occurred: = " + ajaxOptions + " " + thrownError );
            showDebug(request.status);
            showDebug(request.statusText);
            showDebug(request.getAllResponseHeaders());
            showDebug(request.responseText);
        }
    });
}

function getAllAddingData()
{
    $("#items").empty();
    $("#debug").empty();
    request = $.ajax(
    {
        type: "GET",
        url: readingDataXml,
        cache: false,
        dataType: "xml",
        success: function (xml) {
            $(xml).find('addition').each(function () {
                var first = $(this).find('operanda').text();
                var last = $(this).find('operandb').text();
                var answer = $(this).find('answer').text();
                var additions = first + "+" + last + "=" + answer;
                $("#items").append("<li class='tulsa'>" + additions + "</li>");
            });
        },
        error: function(request, ajaxOptions, thrownError) {
            showDebug("Error occurred: = " + ajaxOptions + " " + thrownError );
            showDebug(request.status);
            showDebug(request.statusText);
            showDebug(request.getAllResponseHeaders());
            showDebug(request.responseText);
        }
    });    
}

var showDebug = function(textToDisplay)
{
    $("#debug").append('<li>' + textToDisplay + '</li>');
}