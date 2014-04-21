$('document').ready(function() {
	'use strict';
	ajaxTestGood("/cgi-bin/SimpleXml.py");
	ajaxTestGood("/cgi-bin/NoGood.py");
	$('#debug').append('<li>Document Ready Called</li>');
});

function ajaxTestBad()
{
	'use strict';
	test("ajaxTestBad", function() {
		$('#debug').append('<li>Bar Test called</li>');	
		$.ajax(
		{
			type: "GET",
			url: "/cgi-bin/SimpleXmla.py",
			dataType: "xml",
			cache: 'False',
			success: function (xml) 
			{		
				$('#debug').append('<li>Success</li>');	
				ok(true);
			},
			error:	function(request, ajaxOptions, thrownError)
			{
				$('#debug').append('<li>Failure</li>');	
				ok(false);				
			}
		});
	});
}


function ajaxTestGood(url) {
	'use strict';
	asyncTest("ajaxTestGood", function() {
		$('#debug').append('<li>Bar Test called</li>');	
		$.ajax(
		{
			type: "GET",
			url: url,
			dataType: "xml",
			cache: 'False',
			success: function (xml) 
			{		
				$('#debug').append('<li>Success</li>');	
				ok(true, url);
				start();
			},
			error:	function(request, ajaxOptions, thrownError)
			{
				$('#debug').append('<li>Failure</li>');	
				ok(false, url);
				start();
			}
		});
	});
}
