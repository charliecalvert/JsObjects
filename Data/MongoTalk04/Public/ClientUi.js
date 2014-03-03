/**
 * @author Charlie Calvert
 */

var ClientUi = (function() {	
	var mongoData = null;
	
	function ClientUi() {
		mongoData = new MongoData(this);	
		$.subscribe('buttonsLoaded', function(bar, foo) {
			setUpButtons();
			$("#debugPubSubHeader").text(JSON.stringify(bar, null, '\t'));
			$("#debugPubSubContent").text(JSON.stringify(foo, null, '\t'));
		});		
	}
	
	var setUpButtons = function() {
		$("#readAll").click(readAllUi);
	};
	
	readAllUi = function() {		
		mongoData.readAll(function(data) {
			mongoData.setData(data);
			console.log(data[0]);			
			for (var i = 0; i < data.length; i++) {
				$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
			}
		});
	};
	
	return ClientUi;
}()); 

$(document).ready(function() {'use strict';
	var o = new ClientUi();
});