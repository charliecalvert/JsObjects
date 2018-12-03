const doA = () => {
    console.log('Doing A');
}

const doB = () => {
    console.log('Doing B');
}

const doC = () => {
    console.log('Doing C');
}

const x = 'b';

if ( x === 'a') {
    doA();
} else if (x === 'b') {
    doB();
} else if (x === 'c') {
    doC();
}

