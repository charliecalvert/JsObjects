/**
 * @author Charlie Calvert
 */

ELF.own.ElvenEvent = (function() {
	var that = {};
	
	function ElvenEvent() {
		that.display = new ELF.own.Display();
		$("input[name=tileGroup]:radio").click(radioTileSelection);
		$("input[name=layerGroup]:radio").click(radioLayerSelection);
		$("input[name=checkHide]:radio").click(checkLayerSelection);
	}
	
	// Callback when checkbox clicked
	var checkLayerSelection = function() {

		var id = $("input[name=checkHide]:checked").attr('id');
		
		switch (id) {
			case 'normalView':
				that.display.normalView();
				break;
				
			case 'checkHideNpc': 
				that.display.viewNpc(true);			
				break;
					
			case 'checkHeroView':
				that.display.viewHero(true);
				break;

			case 'checkEditMode':
				that.display.setEditMode(true);
				break;
						
			case 'checkSetButtons':
				that.display.setButtons(true);
				break;
		}
	};
	
	var radioTileSelection = function() {
		var id = $("input[name=tileGroup]:checked").attr('id');

		ELF.run.elvenUtils.showDebug("You clicked " + id);
		if (id === 'grass') {
			moveLogic.elvenReport.currentTile = moveLogic.elvenReport.TILE_TYPE.GRASS;
		} else if (id === 'road') {
			moveLogic.elvenReport.currentTile = moveLogic.elvenReport.TILE_TYPE.ROAD;
		} else if (id === 'no_place') {
			moveLogic.elvenReport.currentTile = moveLogic.elvenReport.TILE_TYPE.NO_PLACE;
		} else if (id === 'place') {
			moveLogic.elvenReport.currentTile = moveLogic.elvenReport.TILE_TYPE.PLACE;
		}
	};

	var radioLayerSelection = function() {
		var id = $("input[name=layerGroup]:checked").attr('id');

		ELF.run.elvenUtils.showDebug("You clicked " + id);
		if (id === 'base') {
			moveLogic.elvenReport.currentGridLayer = moveLogic.elvenReport.LAYER.GRID;
		} else if (id === 'npc') {
			moveLogic.elvenReport.currentGridLayer = moveLogic.elvenReport.LAYER.NPC;
		}
	};
	
	return ElvenEvent;
})();
