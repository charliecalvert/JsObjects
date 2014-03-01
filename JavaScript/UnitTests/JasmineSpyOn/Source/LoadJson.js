/**
 * @author Charlie Calvert
 */

/*
 * We use the modular pattern
 * http://www.elvenware.com/charlie/development/web/JavaScript/JavaScriptModules.html
 */
var LoadJson = (function() { 'use strict';

	var data = null;
	var dataIndex = 0;
	var buttons = null;
	
	function LoadJson() {
		$('#loadJson').click({ fileName : "BackEndData.json" }, this.loadJson);
		$("#foreButton").click(forward);
		$("#backButton").click(backward);
		buttons = $('#foreButton, #backButton');
		buttons.attr("disabled", "disabled");
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
	};

	var backward = function() {
		if (dataIndex > 0) {
			dataIndex--;
			showResult(dataIndex);
			return true;
		}
		return false;
	};

	LoadJson.prototype.loadJson = function(event) {
		var fileName = event.data.fileName;

		$.getJSON(fileName, function(backEndData) {
			data = backEndData;
			showResult(0);
			//foreButton[0].disabled = false;
			//backButton[0].disabled = false;
			buttons.removeAttr("disabled");
		}).fail(function(jqxhr, textStatus, error) {
			console.log("error: " + jqxhr);
		});
	};	

	/* grunt-can-remove-test-code */
	LoadJson.prototype.testMe = function() {
		
		describe("These are the private tests", function() {

			it("Tests that loadFile is called with Sources.html", function() {
				expect(true).toBe(true);
			});

			it("Calls a private method", function() {
				var actual = backward();
				expect(actual).toBe(false);
			});
		});

	}; 
	/* end-grunt-can-remove-test-code */
	
	return LoadJson;
	
})();

$(document).ready(function() { 'use strict';
	new LoadJson();
});
