/**
 * @author Charlie Calvert
 */
require.config({
	paths : {
		jquery : 'jquery-2.0.3',
		objectMethod : 'spec/GetNumber',
		functionObject: 'spec/GetFunction'		
	}
});

require(['jquery', 'objectMethod', 'functionObject'], function($, objectMethod, functionObject) { 'use strict';
	console.log('jQuery');

	$("#getEightClick").click(function() {
		$('#getASpan').html(objectMethod.a);
		$('#getBSpan').html(objectMethod.b);
		$('#getThreeSpan').html(objectMethod.getThree());		
		$('#getA').html(new functionObject().getA());
	});
});

