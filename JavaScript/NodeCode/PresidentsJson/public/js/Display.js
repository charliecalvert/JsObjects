/**
 * @author Charlie Calvert
 */
function Display() {
    'use strict';
    // We have to give it a unique name in this context
    thisDisplay = this;
}

Display.prototype.clearResponse = function() {
    'use strict';
    $('#response').empty();
};

Display.prototype.isValidRow = function(row) {
    'use strict';
    return !((row.MiddleName === undefined) ||
        (row.MiddleName === '[object Object]') ||
        (row.MiddleName === '-'));
};


Display.prototype.displayRow = function(row) {
    'use strict';
    // var middle = (!thisDisplay.isValidRow(row)) ? '' : row.MiddleName;
    // var displayMiddle = (!thisDisplay.isValidRow(row)) ? '-' : row.MiddleName;	
    textToDisplay = row.presidentName + " - born: " + row.born + " died: " + row.died;
    var coreString = '<li><input id=' + row.itemName +
        ' presidentName="' + row.presidentName +
        '" born=' + row.born +
        ' died=' + row.died +
        ' type=radio name=responseGroup />';
    $('#response').append(coreString +
        textToDisplay + '</li>');
};

Display.prototype.showResponse = function(textToDisplay) {
    'use strict';
    $('#response').append('<li>' + textToDisplay + '</li>');
};

Display.prototype.showDebug = function(textToDisplay) {
    'use strict';
    $("#debug").append('<li>' + textToDisplay + '</li>');
};

Display.prototype.showError = function(request, ajaxOptions, thrownError) {
    'use strict';
    thisDisplay.showDebug("Error occurred: = " + ajaxOptions + " " + thrownError);
    thisDisplay.showDebug(request.status);
    thisDisplay.showDebug(request.statusText);
    thisDisplay.showDebug(request.getAllResponseHeaders());
    thisDisplay.showDebug(request.responseText);
};
