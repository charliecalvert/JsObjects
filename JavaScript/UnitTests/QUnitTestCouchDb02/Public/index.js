/**
 * @author Charlie Calvert
 */

function couchDbTests() {
	module('New CouchDb Tests');

	asyncTest('createDatabase', function() {
		$.ajax({
			type : "get",
			url : '/createDatabase',
			dataType : "json",
			success : function(result) {
				ok(true);
				start();
			},
			error : function(result) {
				ok(false);
				start();
			}
		});
	});

	var getCurrentNpcs = function() {
		return [ {
			"column" : 1,
			"row" : 6,
			"npcNumber" : 5,
			"traits" : {
				"Core" : {
					"Type" : "Orc",
					"Confidence" : 0,
					"Experience" : 0,
					"Health" : -1,
					"Knowledge" : 0,
					"Moves" : 0,
					"Strength" : 3,
					"Wisdom" : 1
				},
				"Items" : {
					"Bread" : 0,
					"Plants" : 0,
					"Water" : 0
				}
			},
			"npcName" : "Orc-1-6-5"
		}, {
			"column" : 5,
			"row" : 1,
			"npcNumber" : 1,
			"traits" : {
				"Core" : {
					"Type" : "Orc",
					"Confidence" : 0,
					"Experience" : 0,
					"Health" : 5,
					"Knowledge" : 0,
					"Moves" : 0,
					"Strength" : 3,
					"Wisdom" : 1
				},
				"Items" : {
					"Bread" : 0,
					"Plants" : 0,
					"Water" : 0
				}
			},
			"npcName" : "Orc-5-1-1"
		} ];
	}

	var getNpcs = function() {
		return [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];
	}

	var getGameboard = function() {
		return [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];
	};

	asyncTest('currentNpcsCouch', function() {
		var currentNpcs = getCurrentNpcs();
		var npcs = getNpcs();
		var gameboard = getGameboard();

		$.ajax({
			type : "get",
			url : '/couchWriteState',
			dataType : "json",
			data : {
				current_npcs : {
					current_npcs : JSON.stringify(currentNpcs)
				},
				npcs : {
					npcs : JSON.stringify(npcs)
				},
				gameboard : {
					gameboard : JSON.stringify(gameboard)
				}
			},
			success : function(result) {
				ok(true);
				start();
			},
			error : function(result) {
				ok(false);
				start();
			}
		});
	});

	asyncTest('gameboards', function() {
		var currentNpcs = getCurrentNpcs();
		var npcs = getNpcs();
		var gameboard = getGameboard();
		var allInOne = {
			gameboard : JSON.stringify(gameboard),
			npcs : JSON.stringify(npcs),
			current_npcs : JSON.stringify(currentNpcs)
		};
		$.ajax({
			type : "get",
			url : '/couchWriteGrids',
			dataType : "json",
			data : allInOne,
			success : function(result) {
				ok(true);
				start();
			},
			error : function(result) {
				ok(false);
				start();
			}
		});
	});
	
	asyncTest('readJsonNpcs', function() {
		var app = new ELF.own.AjaxBase();
		app.readJson('current_npcs', function(data) {
			try {
			    var result = JSON.parse(data.current_npcs);
				equal(result[0].row, 6);			
				ok(typeof result[0].row === "number");
				equal(result[0].traits.Core.Health, -1);
			} catch(err) {
				ok(false);
			} finally {
				start();
			}
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'call to readJson failed: ' + request.responseText);
			start();
		});
	});
	
	asyncTest('readJsonGrid', function() {
		var app = new ELF.own.AjaxBase();
		app.readJson('gameboard', function(data) {		   
			try {
				var result = JSON.parse(data.gameboard);
				equal(result[0][0], 0);			
				ok(typeof result[0][0] === "number");
				equal(result[2][4], 1);
			} catch(err) {
				ok(false);
			} finally {
				start();
			}
		},
		function(request, ajaxOptions, thrownError) {
			ok(false, 'call to readJson failed: ' + request.responseText);
			start();
		});
	});
};


$(document).ready(function() {
	couchDbTests();
});