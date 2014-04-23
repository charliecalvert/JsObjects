/**
 * @author Charlie Calvert
 */

define(['jquery'], function() {
	'use strict';
	
	function describe() {
		$('#list').append("<li>I'm a car.</li>");
	}
	
	function talk() {
		$('#list').append("<li>Honk</li>");
	} 	
	
	return { describe: describe, talk: talk };
});
