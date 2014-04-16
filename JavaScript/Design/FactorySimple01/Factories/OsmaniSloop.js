/**
 * @author Charlie Calvert
 * See http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/
 */

function Sloop(options) {
	// some defaults
	this.sails = options.sails || 2;
	this.state = options.state || "brand new";
	this.color = options.color || "silver";
	this.keel = options.keel || true;
}
