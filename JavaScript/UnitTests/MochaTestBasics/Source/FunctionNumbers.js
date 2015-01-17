function Numbers() { }

Numbers.prototype.getOne = function() { 
	return 1;
}

Numbers.prototype.getTwo = function() {
	return 2;
}

exports.numbers = new Numbers;

/** 
 * This will also work with the same test. To prove it,
 * Comment out the code above and uncomment this function.
 * The code above is preferred because all instances of the
 * object share the same methods (static methods).
 * 
 * Reference: http://stackoverflow.com/a/310927/253576
 */
/*
function Numbers() {

	this.getOne = function() { 
		return 1;
	}

	this.getTwo = function() {
		return 2;
	}
} 

exports.numbers = new Numbers
*/
