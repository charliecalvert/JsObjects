/**
 * @author Charlie Calvert
 */

var Point = (function() {
    'use strict';

    // Constructor
    function Point(x1, y1, selector) {
        Object.defineProperty(this, "x", withValue(x1));
        Object.defineProperty(this, "y", withValue(y1));
        $(selector).click({
            that: this
        }, accessProperty);
    }

    var withValue = function(value) {
        var d = withValue.d || (withValue.d = {
            enumerable: false,
            writable: true,
            configurable: true,
            value: null
        });
        d.value = value;
        return d;
    };

    var accessProperty = function(e) {
        privateShowXY('#test03', e.data.that);
    };

    // Private functions	
    var privateShowXY = function(selector, obj) {
        $(selector).html('X = ' + obj.x + ' Y = ' + obj.y);
    };

    Point.prototype.showXY = function(selector) {
        privateShowXY(selector, this);
    };

    return Point;
})();


window.onload = function() {
    'use strict';

    var point1 = new Point(3, 4, '#button01');
    point1.showXY('#test01');
    var point2 = new Point(5, 6, '#button02');
    point2.showXY('#test02');
};
