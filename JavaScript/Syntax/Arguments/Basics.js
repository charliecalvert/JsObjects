function display(index, message) {
    console.log('Parameter number ' + index + ' is ' + message);       
}

function viewArguments() {
     for(var i=0; i<arguments.length; i++) {
        if (typeof arguments[i] === 'object') {
            display(i, JSON.stringify(arguments[i], null, 4));
        }
        display(i, arguments[i]);
    }
}

viewArguments(1, 2, 3, 'still', 'more', { a: 1 })
