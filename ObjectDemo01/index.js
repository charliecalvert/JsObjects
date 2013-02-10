/**
 * @author Charlie
 */

var GetNine = (function() {
    
    var theNumber = 0;
    
    function GetNine(initNumber) {
        theNumber = initNumber;        
    }   
    
    GetNine.prototype.getNumber = function() {
      return theNumber;
    };
    
    return GetNine;
})();

$(document).ready(function() {
    var getNine = new GetNine(223);
    var number = getNine.getNumber();
	$("#test01").html(number);	
});
