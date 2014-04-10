var QueueMaker = function () {
    return {
        array: [],
        head: 0,
        tail: -1,
        
        pushTail: function (value) {
            this.array[this.tail += 1] = value;
            return this.array;
        },
        
        pullHead: function () {
            var value;
            
            if (this.tail >= this.head) {
                 value = this.array[this.head];
                 this.array[this.head] = void 0;
                 this.head += 1;
                 return value;
            }
        },
     
        isEmpty: function () {
            return this.tail < this.head;
        }
    };
};

$(document).ready(function() {
    var queue = QueueMaker();
    queue.pushTail('Hello');
    queue.pushTail('JavaScript');
    var head = queue.pullHead();
    console.log(head);
    $('#foo').html(head);
    head = queue.pullHead();
    $('#foo').append(head);
});