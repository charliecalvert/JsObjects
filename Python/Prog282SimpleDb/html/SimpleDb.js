function getData() 
{
	$("#items").empty();
    request = $.ajax(
    {
        type: "GET",
        url: "/cgi-bin/simple/simpledb.py",
        cache: false,
        dataType: "xml",
        success: function (xml) {
        	var debug = $(xml).find("test01").attr("count");
        	//var debug1 = debug.attr("count");       	 
        	$("#debug").html(debug);       	
            $(xml).find('line').each(function () {
                var first = $(this).find('Field01').text();
                var last = $(this).find('Field02').text();
               // if (last !== 'blank')
                var additions = first + "+" + last;
                $("#data").append("<li class='tulsa'>" + additions + "</li>");
            });
        }    	
    });
    
    request.fail(function(jqXHR, textStatus, bar) {
  	  $("#debug").html("Request failed: " + textStatus + bar );
    });
}
