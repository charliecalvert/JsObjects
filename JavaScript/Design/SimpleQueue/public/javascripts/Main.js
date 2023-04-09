/**
 * New node file
 */

Elf.Main = (function() {
    'use strict';

    var queueList = '#queueList';

    function Main() {
        $('#showQueue').click(showQueue);
        $('#showStack').click(showStack);
    }

    var clear = function() {
        $(queueList).empty();
    };

    var showQueue = function() {
        clear();
        var simpleQueue = new SimpleQueue();
        simpleQueue.addDefaultItems();

        while (simpleQueue.length > 0) {
            $(queueList).append('<li>' + simpleQueue.dequeue() + '</li>');
        }
    };

    var showStack = function() {
        clear();
        var simpleStack = new SimpleStack();
        simpleStack.addDefaultItems();

        while (simpleStack.length > 0) {
            $(queueList).append('<li>' + simpleStack.pop() + '</li>');
        }
    };

    return Main;
})();

$(document).ready(function() {
    'use strict';
    var main = new Elf.Main();
});
