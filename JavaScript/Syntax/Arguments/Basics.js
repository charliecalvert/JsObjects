function display(index, argument, message) {
    console.log("\nParameter", index);
    console.log("-----------");
    console.log('The type is: ', typeof argument);
    console.log('The value is: ', message);
}

function viewArguments() {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'object') {
            display(i, arguments[i], JSON.stringify(arguments[i], null, 4));
        } else {
            display(i, arguments[i], arguments[i]);
        }
    }
}

viewArguments(1, 2, 3, 'still', 'more', {a: 1});
