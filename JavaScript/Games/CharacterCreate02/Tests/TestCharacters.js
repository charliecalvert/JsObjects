/**
 * @author Charlie Calvert
 */

/* jshint browser: true */

describe("Characters Test", function() {'use strict';
	var people = null;

	beforeEach(function() {
		module('characterMod');
	});

	beforeEach(inject(function($injector) {
		people = $injector.get('people');
	}));

	it("can find people factory", function() {
		expect(people).toNotEqual(null);
	});

	it("can find a tower", function() {
		var tower = people.tower();
		expect(tower).toNotEqual(null);
	});

	it("can find the hero", function() {
		var hero = people.hero;
		expect(hero).toNotEqual(null);
	});

	it("can find the hero hitpoints", function() {
		var hero = people.hero;
		expect(hero.hitPoints).toEqual(12);
	});

	it("can find the hero damage", function() {
		var hero = people.hero;
		expect(hero.damage).toEqual(2);
	});

	it("can call hero bonus hitPoints", function() {
		var hero = people.hero;
		for (var i = 0; i < 100; i++) {
			var bonus = hero.bonusHitPoints();
			expect(bonus).toBeGreaterThan(0);
			expect(bonus).toBeLessThan(5);
		}
	});

	it("can call hero bonus damage", function() {
		var hero = people.hero;
		for (var i = 0; i < 100; i++) {
			var bonus = hero.bonusDamage();
			expect(bonus).toBeGreaterThan(0);
			expect(bonus).toBeLessThan(3);
		}
	});

	it("can get hero race", function() {
		var hero = people.hero;
		var race = hero.race;
		expect(race).not.toEqual(null);
	});

	it("can get hero race name", function() {
		var hero = people.hero;
		var race = hero.race;
		expect(race.name).toEqual('Elves');
	});

	it("can get hero class", function() {
		var hero = people.hero;
		var race = hero.class;
		expect(race).not.toEqual(null);
	});

	it("can get hero class name", function() {
		var hero = people.hero;
		var race = hero.class;
		expect(race.name).toEqual('Magic-User');
	});

	it("can get hero spells length", function() {
		var hero = people.hero;
		var value = hero.class.spells.length;
		expect(value).toEqual(13);
	});

	it("can get hero first spell", function() {
		var hero = people.hero;
		var spell = hero.class.spells[0];
		expect(spell).not.toEqual(undefined);
	});

	it("can get hero first spell", function() {
		var hero = people.hero;
		var spell = hero.class.spells[0];
		expect(spell).toEqual('Charm Person');
	});

	it("can get hero needed to move", function() {
		var hero = people.hero;
		var value = hero.neededToMove(1);
		expect(value).toEqual(6);
	});

	it("can find the tower hitpoints", function() {
		var tower = people.tower();
		expect(tower.hitPoints).toEqual(8);
	});

	it("can find the tower damage", function() {
		var tower = people.tower();
		expect(tower.damage).toEqual(1);
	});

	it("can call tower bonus hitPoints", function() {
		var tower = people.tower();
		for (var i = 0; i < 100; i++) {
			var bonus = tower.bonusHitPoints();
			expect(bonus).toBeGreaterThan(0);
			expect(bonus).toBeLessThan(5);
		}
	});

	it("can call tower bonus damage", function() {
		var tower = people.tower();
		for (var i = 0; i < 100; i++) {
			var bonus = tower.bonusDamage();
			expect(bonus).toBeGreaterThan(0);
			expect(bonus).toBeLessThan(3);
		}
	});

	it("can get tower trait", function() {
		var tower = people.tower();
		var traits = tower.traits;
		expect(traits).not.toEqual(null);
	});

	it("can get tower race name", function() {
		var tower = people.tower();
		var traits = tower.traits;
		expect(traits.name).toEqual('Orc');
	});

});

