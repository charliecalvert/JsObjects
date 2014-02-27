/**
 * @author charlie
 */

var UserInterface = function(convert) {    
        
    var convertToFahrenHeitClick = function(event) {
        var userInput = $("#TextName").val();
        var result = convert.toFarenheit(userInput);
        $("#Output").html(result);    
    };

    var convertToMilesClick = function(event) {
        var userInput = $("#TextName").val();
        var result = convert.toMiles(userInput);
        $("#Output").html(result);    
    };
    
    var calculateSquareRootClick = function() {
        var userInput = $("#TextName").val();
        var result = convert.calculateSquareRoot(userInput);
        $("#Output").html(result);    
    };
    
    var init = function() {        
        $("#buttonFahrenheit").click(convertToFahrenHeitClick);
        $("#buttonMiles").click(convertToMilesClick);
        $("#buttonSquareRoot").click(calculateSquareRootClick);
    };
    
    init();
};

$(document).ready(function() {
   var convert = new Convert();
   new UserInterface(convert); 
});
