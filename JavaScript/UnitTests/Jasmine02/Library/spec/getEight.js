define(function() {	'use strict';
	return { 
		getEight: function() { 
			return 8;
		},
		displayGetEight: function() { 
			$('#getEightSpan').html(this.getEight());
		}
	};
});


