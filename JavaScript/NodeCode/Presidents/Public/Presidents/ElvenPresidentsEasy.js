/**
 * @author Charlie
 */

/*global ELF:true*/

ELF.EasyPresident = (function() {

	function President(initName, initStart, initEnd, initBorn, initDied) {
		this.PresidentName = initName;
		this.TermStart = initStart;
		this.TermEnd = initEnd;
		this.Born = initBorn;
		this.Died = initDied;
	}

	function withValue(value) {
		var d = withValue.d || (withValue.d = {
			enumerable : false,
			writable : false,
			configurable : false,
			value : null
		});
		d.value = value;
		return d;
	}


	Object.defineProperty(President.prototype, "PresidentName", {
		value : 0,
		enumerable : true,
		configurable : true
	});

	Object.defineProperty(President.prototype, "TermStart", {
		value : 0,
		enumerable : true,
		configurable : true
	});

	Object.defineProperty(President.prototype, "TermEnd", {
		value : 0,
		enumerable : true,
		configurable : true
	});

	Object.defineProperty(President.prototype, "Born", {
		value : 0,
		enumerable : true,
		configurable : true
	});

	Object.defineProperty(President.prototype, "Died", {
		value : 0,
		enumerable : true,
		configurable : true
	});

	President.prototype.init = function(initName, initStart, initEnd, initBorn, initDied) {
		this.PresidentName = initName;
		this.TermStart = initStart;
		this.TermEnd = initEnd;
		this.Born = initBorn;
		this.Died = initDied;
	};

	return President;
})();
