/**
 * Created by charlie on 11/14/15.
 */

var elfTestUtils = {

    getAttributesFromElement: function(element) {
        'use strict';
        var atts = element.attributes;
        var n = atts.length;
        var arr = [];

        for (var i = 0; i < n; i++) {
            arr.push(atts[i].nodeName);
        }

        return arr;
    },

    showAttributes: function(element, arr) {
        'use strict';
        console.log(arr);
        $.each(arr, function(index, value) {
            console.log(value + ': ' + $(element).attr(value));
        });
    },

    showHtmlElements: function(inputElements) {
        'use strict';
        console.log('Keys:', Object.keys(inputElements));
        $.each(inputElements, function(index, inputElement) {
            console.log(Object.keys($(inputElement)));
            console.log($(inputElement).context);
        });
    },

    getObjectPropertyNamesArray: function(obj) {
        'use strict';
        return Object.getOwnPropertyNames(obj).sort();
    }
};
