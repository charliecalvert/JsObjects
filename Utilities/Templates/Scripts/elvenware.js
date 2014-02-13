$('document').ready(function(){
	$("body").addClass("ui-widget-content");
	$("article").addClass("ui-widget-content");
	$("h1, h2, h3").addClass("ui-widget-header ui-corner-all");
	$("pre").addClass("ui-widget-content");
	$("ul").addClass("ui-widget-content");
	$("li").addClass("ui-widget-content");
	$("footer").addClass("ui-widget-content");
	$("header").addClass("ui-widget-header");
	$("nav").addClass("ui-widget-content");

	registerParagraphClick();
});

// Toggle the color of paragraphs 
// when they user clicks on them.
registerParagraphClick = function()
{
	$("p").click(function() 
	{ 
		var color = $(this).css("color");
		if (color == "rgb(0, 0, 255)")
		{
			$(this).css("color", "black"); 
		}
		else
		{
			$(this).css("color", "blue"); 
		}
	});
}

var elvenware = new Elvenware();


function Elvenware()
{
    this.toggleMenu = function() 
    { 
        $('nav').toggleClass('hide');  
    }
}

$(function() 
{
	setAccordion();
});

function setAccordion()
{
	$( "#accordion00" ).accordion(
	{
		collapsible: true, active: -1
	});

	$( "#accordion01" ).accordion({
		collapsible: true, active: -1
	});
}

function showTracer()
{
	return false;
}
