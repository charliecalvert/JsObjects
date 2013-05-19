var App = (function() {
	
	function Constants() {
		Object.defineProperty(this, "MAIN_BIG", withValue('mainBig'));
		Object.defineProperty(this, "MAIN_SMALL", withValue('mainSmall'));
		Object.defineProperty(this, "MAIN_DIV", withValue('#main'));
	}
	
	var withValue = function(value) {
		var d = withValue.d || (withValue.d = {
			enumerable : false,
			writable : false,
			configurable : false,
			value : null
		});
		
		d.value = value;
		return d;
	}
	
	return Constants;
})();

$(document).ready(function() {
	var app = new App();
	$('#test01').html(app.MAIN_BIG);
	$('#test02').html(app.MAIN_SMALL);
	$('#test03').html(app.MAIN_DIV);
	app.MAIN_DIV = 'Bar';
	$('#test04').html(app.MAIN_DIV);
});