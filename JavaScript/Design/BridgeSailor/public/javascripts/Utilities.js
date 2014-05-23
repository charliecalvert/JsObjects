/**
 * New node file
 */

define(["Elf"], function(elf) {

	elf.utilities = {
		clear : function() {
			$("#boatList").empty();
		},

		show : function(value) {
			console.log(value);
			$("#boatList").append("<li>" + value + "</li>");
		},

		banner : function(message) {
			this.show("===============");
			this.show(message);
			this.show("===============");
		}

	};

	return elf;

});