var textLoader = {    
    init : function() {
        $(".buttonLoader").click(textLoader.clickHandler);
    },
    clickHandler : function() {
        textLoader.switcher(this.id);
    },
    
    switcher : function(buttonId) {
        var queries = { 
            "buttonSource01": "#paragraph01",
            "buttonSource02": "#paragraph02",
            "buttonSource03": "#paragraph03",
        };      
        var query = queries[buttonId];  
        var callback = function(responseText, textStatus, XMLHttpReques) {
            console.log("File was loaded.");        
            var bar = $(responseText).filter(query).html();
            $("#showSources").html(bar);
        };
        this.loadFile("Sources.html", callback);        
    },
    
    loadFile: function(file, callback) {
        $.get(file, callback);
    }    
};

$(document).ready(function() {
	textLoader.init();	
});

