/**
 * @author Charlie Calvert
 */

var app = {
	walkFolder: null,
	init: function() {'use strict';
		this.walkFolder = new WalkFolder();
	}
};

var WalkFolder = (function() {'use strict';
	
	function WalkFolder() {
		$("#walk").click(walk);
		$("#clearList").click(clearList);
	}
	
	var clearList = function() {
		$("#walkList").empty();
	};
	
	var walk = function() {
		$.getJSON('/walk', function(data) {
			for (var i = 0; i < data.files.length; i++) {
				$("#walkList").append('<li>' + data.files[i] + '</li>');
			}
		});
	};
	
	return WalkFolder;
}());

$(document).ready(function() {'use strict';
	app.init();
});
