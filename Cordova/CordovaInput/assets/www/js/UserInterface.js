/**
 * @author Charlie Calvert
 */
CordovaInput.userInterface = new function(convert) {    
        
    var convertToFahrenheitClick = function(event) {
        var userInput = $("#TextName").val();
        var result = CordovaInput.Convert.toFarenheit(userInput);
        $("#Output").html(result);    
    };

    var convertToMilesClick = function(event) {
        var userInput = $("#TextName").val();
        var result = CordovaInput.Convert.toMiles(userInput);
        $("#Output").html(result);    
    };
    
    var calculateSquareRootClick = function() {
        var userInput = $("#TextName").val();
        var result = CordovaInput.Convert.calculateSquareRoot(userInput);
        $("#Output").html(result);    
    };
    
    this.init = function() {        
        $("#buttonFahrenheit").click(convertToFahrenheitClick);
        $("#buttonMiles").click(convertToMilesClick);
        $("#buttonSquareRoot").click(calculateSquareRootClick);
    };   
  
};

$(document).ready(function() {	
	CordovaInput.userInterface.init();		 
});
