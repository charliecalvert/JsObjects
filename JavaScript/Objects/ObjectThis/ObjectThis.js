function runMe() {
    'use strict';
    return this; // jshint ignore:line
}

var myObject = {
    runMe: function() {
        'use strict';
        return this;
    }
};

function RunMe() {
    'use strict';
    $('#test03').append(this instanceof RunMe);
}

var App = (function() {
    'use strict';

    function App() {
        $("#testButton").click(buttonClick);
        $('#test05').append(this instanceof App);
    }

    var buttonClick = function() {
        var result = this instanceof App;
        $('#test06').append(result.toString());
    };

    return App;
})();

$(document).ready(function() {
    "use strict";
    var functionContext = runMe();
    $('#test01').append(functionContext === window);

    var functionContext2 = myObject.runMe();
    $('#test02').append(functionContext2 === myObject);

    var functionContext3 = new RunMe();
    $('#test04').append(functionContext3 instanceof RunMe);

    new App();

});
