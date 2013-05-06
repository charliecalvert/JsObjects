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

	};

	var radioLayerSelection = function() {
		var id = $("input[name=layerGroup]:checked").attr('id');

	};
	
	return ElvenEvent;
})();
