var jQueryTests

$(document).ready(function() {
	jQueryTests = new JQueryTests();
	jQueryTests.restoreH1();
});

function JQueryTests()
{
	var headerModified = true;
	var backColor = $("#testHeader").css("backgroundColor");
	var testColor = $("#testHeader").css("color");

	this.modifyHeaderStyle = function()
	{
	    headerModified = !headerModified;
	    
	    if (headerModified === false)
	    {
			$("#testHeader").css({ backgroundColor: "blue",
					  color: "yellow",
					  border: "double black thick" });
		} else
		{
			$("#testHeader").css({ backgroundColor: backColor,
				  color: testColor,
				  border: "none" });
		}
	}

	
	this.setH1 = function()
	{
		$("#testHeader").html("New Dynamic Header Text");
	}
	
	this.restoreH1 = function()
	{
		$("#testHeader").html("I'm the Test Header");
	}
	
	this.addPar = function()
	{
		$("#testHeader").after("<p class='attention'>New P tag inserted with this text</p>");
	}
	
	this.replaceParsWithH2 = function()
	{
		$("p").each(function() {
			p = $(this);
			p.replaceWith("<h2 class='switchMeBack'>" + p.html() + "</h2>");
		});
	}
	
	this.replaceSwitchMeBackWithPars = function()
	{
		$(".switchMeBack").each(function() {
			p = $(this);
			p.replaceWith("<p class='attention'>" + p.html() + "</p>");
		});
	}
	
	this.movePars = function()
	{
		var data = $("#a").html();
		$("#a").remove();
		$("#b").addClass('attention');
		$("#b").after("<p id='a' class='attention'>" + data + "</p>");
	}

	this.movePars02 = function()
	{
		var data = $("#b").html();
		$("#b").remove();
		$("#a").after("<p id='b' class='attention'>" + data + "</p>");
	}
	
	this.applyClassToPars = function()
	{
		$("p").addClass("able");
	}
	
	this.removeAbleClass = function()
	{
		$(".able").removeClass("able");
	}
	
	this.hiLite = function()
	{
	   $("#a").addClass("attention");
	}

	this.removeHiLite = function()
	{
	   $(".attention").removeClass("attention");
	}
	
	this.handleForm = function()
	{
		var input = $("#jqText").val();
		alert(input);
	}
	
	this.addNumbers = function()
	{
		var operanda = $("#operanda").val();
		var operandb = $("#operandb").val();
		var sum = parseInt(operanda) + parseInt(operandb);
		$("#result").html(sum);
		$("#answer").val(sum);
	}
}