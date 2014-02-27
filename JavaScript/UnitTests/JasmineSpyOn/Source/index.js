/**
 * @author Charlie Calvert
 */

/* 
 * We use the modular pattern
 * http://www.elvenware.com/charlie/development/web/JavaScript/JavaScriptModules.html
 */
var LoadJson = (function() {

	var data = null;
	var dataIndex = 0;
	var foreButton = null;
	var backButton = null;
	
	function LoadJson() {
		$('#loadJson').click({ fileName : "BackEndData.json" }, this.loadJson);
		foreButton = $('#foreButton');
		backButton = $('#backButton');
		foreButton.click(forward);
		backButton.click(backward);
		foreButton[0].disabled = true;
		backButton[0].disabled = true;
	}

	var showResult = function(index) {
		$('#showJsonName').html(data[index].name);
		$('#showJsonHitPoints').html(data[index].hitPoints);
		$('#showJsonDamage').html(data[index].damage);
	};

	var forward = function() {
		if (dataIndex < data.length - 1) {
			dataIndex++;
			showResult(dataIndex);
		}
	}
	
	var backward = function() {
		if (dataIndex > 0) {
			dataIndex--;
			showResult(dataIndex);
		}
	}	
	
	LoadJson.prototype.loadJson = function(event) {
		var fileName = event.data.fileName;

		$.getJSON(fileName, function(backEndData) {
			data = backEndData;			
			showResult(0);
			foreButton[0].disabled = false;
			backButton[0].disabled = false;
		}).fail(function(jqxhr, textStatus, error) {
			console.log("error: " + error);
		});
	};	

	return LoadJson;

})();

$(document).ready(function() {
	new LoadJson();
});
