var App = (function() {

	Alabama = 'AL',
	California = 'CA',
	Texas = 'TX',
	Washington = 'WA';

	function App() {
		isEven(2);
		isEven(3);
		isEven(4);
		isEven(5);
		runState();
	};
	
	var isEven = function(input) {
		if (input % 2 === 0) {
			console.log('Your input of ' + input + ' is even');
		} else {
			console.log('Your input of ' + input + ' is odd');
		}
	};
	
	var statePopulation =  function(stateAbbreviation) {
		var result = 0;
		
		switch (stateAbbreviation) {
			case 'AL': 
				result = 4800736;
				break;

			case 'CA': 
				result = 38053956;
				break;

			case 'TX':
				result = 25901361;
				break;

			case 'WA': 
				result = 6830038;
				break;

			default: 
				result = -1;
		}

		console.log('The population of ' + stateAbbreviation + ' is ' + result);
	};

	var runState = function() {
		statePopulation(Alabama);
		statePopulation(California);
		statePopulation(Texas);
		statePopulation(Washington);
		statePopulation('Unknown');
}

	return App;
})();

var app = new App();