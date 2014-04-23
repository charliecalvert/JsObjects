/**
 * @author Charlie Calvert
 */

var ElfSimple = {
	baseObject : null,
	subClass02 : null,

	init : function() { 'use strict';
		this.baseObject = new ElfSimple.BaseObject();
		this.subClass02 = new ElfSimple.SubClass02();
	}
};

/*
 * BaseObject
 */

ElfSimple.BaseObject = function() {'use strict';
	var name = "ElfSimple.BaseObject";

	// Name caught in closure
	ElfSimple.BaseObject.prototype.sayName = function(selector, listSelector) {
		$(selector).html("In ElfSimple.BaseObject");
		// $(listSelector).append("<li>Constructor name = " + this.constructor.name + "</li>");
  		$(listSelector).append("<li>BaseObject.name = " + name + "</li>");
	};
};

/*
 * SubClass02
 */


ElfSimple.SubClass02 = function() {'use strict';
	this.name = "ElfSimple.SubClass02";
};

ElfSimple.SubClass02.prototype = new ElfSimple.BaseObject();



ElfSimple.SubClass02.prototype.sayName = function(selector, listSelector) {
	'use strict';
	$(selector).html("In ElfSimple.SubClass02");
//	$(listSelector).append("<li>constructor name = " + this.constructor.name + "</li>");
	$(listSelector).append("<li>Subclass02.name = " + this.name + "</li>");
};



$(document).ready(function() {"use strict";

	// Exercise base object
	ElfSimple.init();
	ElfSimple.baseObject.sayName("#test01b", "#list01b");

	// Declare subclass of BaseObject
	function SubClass01() {	}
	SubClass01.prototype = new ElfSimple.BaseObject();
	var subClass01 = new SubClass01();
	subClass01.sayName("#test02b", "#list02b");

	// Instantiate subclass and exercise it
	// Subclass using module pattern
	ElfSimple.subClass02.sayName("#test03b", "#list03b");
});
