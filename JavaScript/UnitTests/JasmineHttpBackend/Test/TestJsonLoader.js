/**
 * @author Charlie Calvert
 */

describe("mycontrollertest", function() {'use strict';
	var myController = new LoadJson();
	
	it("Tests load json", function() {
		spyOn($, "getJSON");	
		myController.loadJson({ data: { fileName: "BackEndData.json" } });
		expect($.getJSON).toHaveBeenCalledWith("BackEndData.json", jasmine.any(Function));
	});

});
