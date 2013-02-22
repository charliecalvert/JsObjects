var chords;

$('document').ready(function() {
	$("body").addClass("ui-widget-content");
	$("h1, h2").addClass("ui-widget-content blue");
	$("pre").addClass("ui-widget-content");
	$("ul").addClass("ui-widget wide");
	$("li").addClass("ui-widget wide");
	$("footer").addClass("ui-widget-content");
	$("header").addClass("ui-widget-header");
	$("button").addClass("ui-widget-content");
	
	chords = new ChordCode();

	$("input[name=mainGroup]:radio").click(chords.radioButtonPatternSelection);
	
	$("#mainGroup").buttonset();
	$("button").button();
	$("#mainGroup").addClass('wide');	
});


var ChordCode = function() 
{

	var patterns = {};
	patterns["Pattern01"] = "pattern=1";
	patterns["Pattern02"] = "pattern=2";
	patterns["Pattern03"] = "pattern=3";
	var patternId = patterns["Pattern01"];
	var frequency = frequencies['c0'];
	
	this.radioButtonPatternSelection = function()
	{ 
	  var id = $("input[name=mainGroup]:checked").attr('id');
	  patternId = patterns[id];
	  chords.runQuery();	  
	}
	
	this.radioButtonKeySelection = function()
	{
		var id = $("input[name=keyGroup]:checked").attr('id');
//		frequency = frequencies[id];
		var data = patternId.split('=');
		playExample(id, data[1]);
	}

	this.runQuery = function() {
		getKeys();
		getPattern();	
	}
	
	function getKeys() 
	{
	    $("#keys").empty();
	    request = $.ajax(
	    {
			type: "GET",
			url: "/cgi-bin/cscchords/GetChords.py",
			cache: false,
			dataType: "xml",
			success: function (xml) 
			{
				var x = 0;
				$(xml).find('key').each(function () {
					var item1 = $(this).find('itemP1').text();
					var item2 = $(this).find('itemP2').text();
					var item3 = $(this).find('itemP3').text();
					var item4 = $(this).find('itemP4').text();
					var item5 = $(this).find('itemP5').text();
					var item6 = $(this).find('itemP6').text();
					var item7 = $(this).find('itemP7').text();
					var values = item1 + '-' + item2 + '-' + item3 + '-' + item4 + '-' + item5 + '-' + item6 + '-' + item7
					// $("#keys").append("<li class='ui-widget-content'>" + values + "</li>");					
					options = ['c0', 'd0', 'e0', 'f0', 'g0', 'a0', 'b0'];
					$("#keys").append("<li class='wide'><input id=" + options[x] + " type='radio' name='keyGroup'><label for=" + options[x] + ">" + values + "</label></li>");					
					x = x + 1;
				});
				$('#keyGroup').buttonset();
				$('label').addClass("wide");
				$("input[name=keyGroup]:radio").click(chords.radioButtonKeySelection);
			}
		});
		
		request.fail(function(jqXHR, textStatus, bar) {
			$("#debug").html("GetAllStates failed: " + textStatus + bar);
		});
	}
	
	function getPattern() 
	{
		$("#patterns").empty();
		pattern = patternId;
		request = $.ajax(
		{
			type: "POST",
			url: "/cgi-bin/cscchords/GetChords.py",
			cache: false,
			dataType: "xml",
			data: pattern,
			success: function (xml) 
			{
				var x = 0;
				options = ['c01', 'd01', 'e01', 'f01', 'g01', 'a01', 'b01'];
				$(xml).find('key').each(function () {
					var item1 = $(this).find('#pos01').text();
					var item2 = $(this).find('#pos02').text();
					var item3 = $(this).find('#pos03').text();
					var item4 = $(this).find('#pos04').text();
					var values = item1 + '-' + item2 + '-' + item3 + '-' + item4;
					$("#patterns").append("<li><input id=" + options[x] + " type='radio' name='patternGroup'><label class='narrow' for=" + options[x] + ">" + values + "</label></li>");
					// $("#patterns").append("<li class='nice'>" + values + "</li>");
					x = x + 1;
				});
				$('#patternGroup').buttonset();
//				$('label').addClass('narrow');
			}
		});
	
		request.fail(function(jqXHR, textStatus, bar) {
			$("#debug").html("GetAllStates failed: " + textStatus + bar);
		});
	}
}

