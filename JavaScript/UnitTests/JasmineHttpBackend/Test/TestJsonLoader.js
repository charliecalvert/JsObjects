/**
 * @author Charlie Calvert
 */

describe("mycontrollertest", function() {'use strict';
	var myController = new LoadJson();
	
	it("Tests load json", function() {
		var data = {"name": "NPC01", 
			"hitPoints": 1,
			"damage": 2
		};
		spyOn($, "getJSON").andReturn({fail: function(c){c(data);}});	
		myController.loadJson({ data: { fileName: "BackEndData.json" } });
		expect($.getJSON).toHaveBeenCalledWith("BackEndData.json", jasmine.any(Function));
	});

});
