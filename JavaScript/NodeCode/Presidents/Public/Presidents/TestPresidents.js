/**
 * @author Charlie Calvert
 */

/*global ELF: false, ok: true, start: true, stop: true, equal: true */
/*jshint jquery: true, browser: true */ 



function testPresident() {
	'use strict';
	
	test("PresidentPrivate", function() {
		var p = new ELF.PresidentPrivate('BB', 1, 2, 3, 4);
		ok(p.getPresidentName() === 'BB');
		ok(p.getTermStart() === 1);
		ok(p.getTermEnd() === 2);
		ok(p.getBorn() === 3);
		ok(p.getDied() === 4);
	});

	test("President", function() {
		var p = new ELF.President();
		p.init('BB', 1, 2, 3, 4);
		ok(p.PresidentName === 'BB');
		ok(p.TermStart === 1);
		ok(p.TermEnd === 2);
		ok(p.Born === 3);
		ok(p.Died === 4);
	});

	// Make sure we can't access lower case private variables
	test("PresidentRaiseFail", function() {
		var p = new ELF.PresidentPrivate('BB', 1, 2, 3, 4);
		raises(p.presidentName === 'BB');
		raises(p.termStart === 1);
		raises(p.termEnd === 2);
		raises(p.born === 3);
		raises(p.died === 4);
	});

	test("PresidentInit", function() {
		var p = new ELF.President();
		p.init('AA', 111, 222, 333, 444);
		ok(p.PresidentName === 'AA');
		ok(p.TermStart === 111);
		equal(p.TermEnd, 222, "Term End is mixed up. We got: ", p.TermEnd);
		ok(p.Born === 333);
		ok(p.Died === 444);
	});	
	
	test("EasyPresident", function() {
		var pName = 'BB';
		var p = new ELF.EasyPresident(pName, 1, 2, 3, 4);
		equal(p.PresidentName, 'BB', "Expected " + pName +' got ' + p.PresidentName);
		equal(p.TermStart, 1);
		equal(p.TermEnd, 2);
		equal(p.Born, 3);
		equal(p.Died, 4);
	});
	
	test("PresidentsArray", function() {
		var a = [];
		a[0] = new ELF.PresidentPrivate('A', 1, 2, 3, 4);
		a[1] = new ELF.PresidentPrivate('B', 11, 22, 33, 44);
		equal(a[0].getTermStart(), 1);
		equal(a[1].getTermStart(), 11);
		equal(a[0].getTermEnd(), 2);
		equal(a[1].getTermEnd(), 22);
		equal(a[0].getBorn(), 3);
		equal(a[1].getBorn(), 33);
		equal(a[0].getDied(), 4);
		equal(a[1].getDied(), 44);
	});
	
	test("EasyPresidentsArray", function() {
		var a = [];
		a[0] = new ELF.EasyPresident('Able', 1, 2, 3, 4);
		a[1] = new ELF.EasyPresident('Buoy', 11, 22, 33, 44);
		equal(a[0].PresidentName, 'Able');
		equal(a[1].PresidentName, 'Buoy');
		equal(a[0].TermStart, 1);
		equal(a[1].TermStart, 11);
		equal(a[0].TermEnd, 2);
		equal(a[1].TermEnd, 22);
		equal(a[0].Born, 3);
		equal(a[1].Born, 33);
		equal(a[0].Died, 4);
		equal(a[1].Died, 44);
	});
	
	test("PresidentToJson", function() {
		var pName = 'BB';
		var p = new ELF.EasyPresident(pName, 1, 2, 3, 4);
		j = p.toJSON();
		equal(j.presidentName, pName);
	});
	
	test("writeJson", function() {
		var pName = 'BBC';
		var p = new ELF.EasyPresident(pName, 1, 2, 3, 4);
		var u = new ELF.PresidentUtils();
		stop();
		u.putPresident("/writePresident", 'President.json', p.toJSON(), 
		function() {
			ok(true);
			start();
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'Could not write JSON to file: ' + request.responseText);
			console.log(thrownError, ajaxOptions);
			start();	
		});		
	});
	
	function writePresidents(json, utils) {		
		utils.putPresidents("/writePresidents", 'Presidents.json', json, 
		function() {
			ok(true);
			start();			
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'Could not write JSON to file: ' + request.responseText);
			console.log(thrownError, ajaxOptions);
			start();				
		});
	}
	
	test("writePresidents", function() {
		stop();		
		var utils = new ELF.PresidentUtils();
		utils.loadPresidents("/Public/PresidentsAndVeeps.xml", function(presidents) {			
			writePresidents(presidents, utils);			
		});
	});
}

testPresident();
