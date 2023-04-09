import {writeJsonPrivate} from './WriteJsonPrivate';
import {readJsonPrivate} from "./ReadJsonPrivate";

/*jshint jquery:true, browser:true, devel: true, strict: true */

class App {
    'use strict';

    constructor() {
        document.getElementById("buttonRead").onclick = readJsonPrivate;
        document.getElementById("buttonWrite").onclick = writeJsonPrivate;
    }

}

window.onload = function() {
    'use strict';
    new App();
};
