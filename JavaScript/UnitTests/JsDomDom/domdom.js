'use strict';

const { JSDOM } = require('jsdom');

const options = {
    resources: 'usable',
    runScripts: 'dangerously',
};

JSDOM.fromFile('index.html', options).then((dom) => {
    //console.log(dom.window.document.body.textContent.trim());
    //console.log(dom.window.foo());

    setTimeout(() => {
        console.log(dom.window.document.body.textContent.trim());
        console.log(dom.window.foo());
    }, 100);
});