/**
 * @author Charlie Calvert
 */


// ptor.wait(function () {
  // Return a condition. Code will continue to run once it is true      
// }, 10000); // Only do this for 10 seconds


describe("Fragments", function() {'use strict';
	var addController = null;
	var ptor = protractor.getInstance();
	
	// beforeEach(module('elfApp'));

	/* beforeEach(inject(function($rootScope, $controller) {
		addController = $rootScope.$new();
		$controller('FragmentController', {
			$scope : addController
		});
	})); */

	/* beforeEach(function() {
	   // ptor.driver.get('http://localhost:4444/wd/hub/index.html');
	   // ptor.driver.get('http://127.0.0.1:8020/Angular%20Include%2001/index.html');
	   ptor.driver.get('http://www.google.com');
	}); */
	
	it('should load the home page', function() {
		browser.get('http://127.0.0.1:8020/AngularInclude01/index.html');
		expect(true).toBe(true);	
	});
	
	it('should get the body', function() {
		browser.get('http://127.0.0.1:8020/AngularInclude01/index.html');
		//body = ptor.findElement(protractor.By.tagName('body'));
		var body = element(by.tagName("body"));		
		body.isDisplayed().then(function() {
			expect(true).toBe(true);
			// expect(body).toBeDefined();
	   });
	});
	
	it('should get some text', function() {
		browser.get('http://127.0.0.1:8020/AngularInclude01/index.html');
		//body = ptor.findElement(protractor.By.tagName('body'));
		// var body = by.model("hint");	
		var body = element(by.binding('hint'));			
		expect(body.getText()).toEqual('TestMe');	   
	});

	/* it('should load Fragment01.html', function() {
		browser().navigateTo('/index.html');
		expect(element('.doc-example-live [ng-include]'.text().toMatch(/Content of Fragment01.html/)));
	});
	
	it('should load Fragment02.html', function() {
		browser().navigateTo('/index.html');
		select('fragment').option('1');
		expect(element('.bar').text()).toMatch(/Content of Fragment02.html/);
	});
	
	it('should change to blank', function() {
		select('template').option('');
		expect(element('.doc-example-live [ng-include]')).toBe(undefined);
	}); */

}); 