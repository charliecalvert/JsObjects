var LoadText = (function() {
	
	function LoadText() {		
		$(".buttonLoader").click(clickHandler);
	}    

    var clickHandler = function() {
        textLoader.switcher(this.id);
    };
    
    var switcher = function(buttonId) {
        var queries = { 
            "buttonSource01": "#paragraph01",
            "buttonSource02": "#paragraph02",
            "buttonSource03": "#paragraph03",
        };      
        
        var query = queries[buttonId];  
        var callback = function(responseText, textStatus, XMLHttpReques) {
            console.log("File was loaded.");        
            var textToDisplay = $(responseText).filter(query).html();
            $("#showSources").html(textToDisplay);
        };
        this.loadFile("Sources.html", callback);        
    };
    
    LoadText.prototype.loadFile = function(file, callback) {
       $.get(file, callback);
    };    
    
    return LoadText;
}());

$(document).ready(function() {
	new LoadText();	
});

