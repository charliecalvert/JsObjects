/**
 * @author Charlie
 */

/*global ELF:true*/

ELF.PresidentPrivate = (function() {
	'use strict';
	function President(initName, initStart, initEnd, initBorn, initDied) {
		var presidentName = initName;
		var termStart = initStart;
		var termEnd = initEnd;
		var born = initBorn;
		var died = initDied;

		this.getPresidentName = function() {
			return presidentName;
		};

		this.getTermStart = function() {
			return termStart;
		};

		this.getTermEnd = function() {
			return termEnd;
		};

		this.getBorn = function() {
			return born;
		};

		this.getDied = function() {
			return died;
		};
	}

	President.prototype.init = function(initName, initStart, initEnd, initBorn, initDied) {
		this.PresidentName = initName;
		this.TermStart = initStart;
		this.TermEnd = initEnd;
		this.Born = initBorn;
		this.Died = initDied;
	};

	return President;
})();
