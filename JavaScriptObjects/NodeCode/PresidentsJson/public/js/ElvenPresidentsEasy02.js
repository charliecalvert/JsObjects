/**
 * @author Charlie
 */

/*global ELF:true*/

ELF.EasyPresident = (function() {

	function withValue(value) {
		var d = withValue.d || (withValue.d = {
			enumerable : false,
			writable : false,
			configurable : true,
			value : null
		});
		d.value = value;
		return d;
	}

	function President(initName, initStart, initEnd, initBorn, initDied) {
		Object.defineProperty(this, "PresidentName", withValue(initName));
		Object.defineProperty(this, "TermStart", withValue(initStart));
		Object.defineProperty(this, "TermEnd", withValue(initEnd));
		Object.defineProperty(this, "Born", withValue(initBorn));
		Object.defineProperty(this, "Died", withValue(initDied));
	}

	// Readonly, we can't init
	/*
	President.prototype.init = function(initName, initStart, initEnd, initBorn, initDied) {
		this.PresidentName = initName;
		this.TermStart = initStart;
		this.TermEnd = initEnd;
		this.Born = initBorn;
		this.Died = initDied;
	}; */

	President.prototype.initFromJSON = function(json) {
		this.PresidentName = json.presidentName;
		this.TermStart = json.termStart;
		this.TermEnd = json.termEnd;
		this.Born = json.born;
		this.Died = json.died;
	};

	President.prototype.toJSON = function() {
		return {
			presidentName : this.PresidentName,
			termStart : this.TermStart,
			termEnd : this.TermEnd,
			born : this.Born,
			died : this.Died
		};
	};

	return President;
})();
