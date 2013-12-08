/**
 * @author Charlie Calvert
 */


describe("Test Search", function() { 'use strict';
	var ptor = protractor.getInstance();

	it('should load the home page', function() {
		browser.get('http://127.0.0.1:8020/AngularSearch/index.html');
		expect(true).toBe(true);
	});


	it('should contain six races', function() {
		var races = ptor.findElements(protractor.By.repeater('race in races'));
		expect(races).toBeTruthy();
	});

	it('should contain six races', function() {
		var races = ptor.findElements(protractor.By.repeater('race in races').column('race'));
		races.then(function(result) {
			// console.log(result);
			expect(result.length).toEqual(18);
		});
	});


	it('should contain six races', function() {
		var races = ptor.findElements(protractor.By.repeater('race in races').column('race'));
		races.then(function(result) {
			expect(result[0].getText()).toEqual('Orc');
		});
	});

	it('should contain six races', function() {
		var races = ptor.findElements(protractor.By.repeater('race in races').column('race'));
		races.then(function(result) {
			expect(result[3].getText()).toEqual('Dwarf');
		});
	});

	it('should contain six races', function() {
		var races = ptor.findElements(protractor.By.repeater('race in races'));
		races.then(function(result) {
			expect(result[3].getText()).toEqual('Elf 13 6');
		});
	});
	/*
	it('should contain six races', function() {
		var races = ptor.findElements(protractor.By.repeater('race in races'));
		races.then(function(result) {
			expect(result.length()).toEqual(6);
		});
	});


	it('should search across all fields when filtering with a string', function() {
		// var input = $('input').first();
		element(by.model('search.$')).sendKeys('m');
		// input('searchText').enter('m');
		var races = ptor.findElements(protractor.By.repeater('race in races'));
		console.log("Races: ");
		console.log(races);
		races.then (function(raceResult) {
			console.log(raceResult);
		});
		// expect(projects.column('race.race')).toEqual(['Elf', 'Mike', 'Adam']);

		//input('searchText').enter('76');
		//expect(repeater('#searchTextResults tr', 'friend in friends').column('friend.name')).toEqual(['John', 'Julie']);
	});


	it('should search in specific fields when filtering with a predicate object', function() {
		input('search.$').enter('i');
		expect(repeater('#searchObjResults tr', 'friend in friends').column('friend.name')).toEqual(['Mary', 'Mike', 'Julie', 'Juliette']);
	});
	it('should use a equal comparison when comparator is true', function() {
		input('search.name').enter('Julie');
		input('strict').check();
		expect(repeater('#searchObjResults tr', 'friend in friends').column('friend.name')).toEqual(['Julie']);
	});
	*/
});
