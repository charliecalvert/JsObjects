/**
 * @author Charlie Calvert
 */

/*jshint devel:true, jquery:true, browser:true, strict: true */

/*global ELF:true */

ELF.own.Display = (function() {'use strict';

	var that = {};
	that.debugVisible = false;
	that.editMode = false;
	that.npcView = false;

	// Constructor
	function Display() {
		this.normalView();
	}

	Display.prototype.normalView = function() {
		this.viewHero(false);
		this.viewNpc(false);
		this.setEditMode(false);
		this.setButtons(false);
		this.setConflictMode(false);		
		this.showDebugSection(false);
		showCore(true);
	}
	
	var showCore = function(turnOn) {
		if (turnOn === true) {
			$("#textDisplay").show('slow');
			$("#locationDisplay").show('slow');
		} else {
			$("#textDisplay").hide('slow');
			$("#locationDisplay").hide('slow');
		}
	}
	
	Display.prototype.viewHero = function(turnOn) {
		if (that.npcView) {
			this.viewNpc(false);
		}
		that.heroView = turnOn;
		if (turnOn === true) {
			showCore(false);
			$('#viewHero').show('slow');
		} else {
			$('#viewHero').hide('slow');
		}			
	}
	
	Display.prototype.viewNpc = function(turnOn) {
		if (that.heroView) {
			this.viewHero(false);
		}
		that.npcView = turnOn;
		if (turnOn === true) {
			showCore(false);
			$('#viewNpc').show('slow');
		} else {
			$('#viewNpc').hide('slow');
		}			
	}
	
	Display.prototype.setButtons = function(turnOn) {
		if (turnOn === true) {
			$("#debugButtonDiv").show('slow');
		} else {
			$("#debugButtonDiv").hide('slow');
		}
	};

	Display.prototype.setConflictMode = function(turnOn) {
		if (!turnOn) {
			$("#textDisplay").show('slow');
			$("#conflictDisplay").hide('slow');
		} else {
			$("#textDisplay").hide('slow');
			$("#conflictDisplay").show('slow');
		}
	};

	Display.prototype.setEditMode = function(turnOnEditMode) {
		that.editMode = turnOnEditMode;
		if (!that.editMode) {
			$('#buttonPutGrid').hide('slow');
			$('#buttonGetGrid').hide('slow');
			$('#tileDiv').hide('slow');
			$('#layerDiv').hide('slow');
			$("#textDisplay").show('slow');
			$('#radios').css("height", "100px");
		} else {
			$('#buttonPutGrid').show('slow');
			$('#buttonGetGrid').show('slow');
			$('#tileDiv').show('slow');
			$('#layerDiv').show('slow');
			$("#textDisplay").hide('slow');
			$('#radios').css("height", "200px");
			$('#grass').prop('checked', true);
			$('#base').prop('checked', true);
		}
	};

	Display.prototype.showDebugSection = function(debugVisible) {
		var status = debugVisible ? $("#debugMessageDiv").show("slow") : $(
				"#debugMessageDiv").hide("slow");
	};

	return Display;
})();

$("document").ready(function() {'use strict';
	new ELF.own.ElvenEvent();
});
