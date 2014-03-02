/**
 * @author Charlie Calvert
 */

var ClientUi = (function() {	
	var mongoData = null;
	
	function ClientUi() {
		mongoData = new MongoData();
		$("#readAll").click(readAllUi);
	}
	
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