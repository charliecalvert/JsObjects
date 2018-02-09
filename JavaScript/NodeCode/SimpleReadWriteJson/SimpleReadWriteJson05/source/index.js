import {writeJsonPrivate} from './WriteJsonPrivate';
import {readJsonPrivate} from "./ReadJsonPrivate";

/*jshint jquery:true, browser:true, devel: true, strict: true */

class App {
    'use strict';

    constructor() {
        $("#buttonRead").click(readJsonPrivate);
        $("#buttonWrite").click(writeJsonPrivate);
    }

}

$(document).ready(function() {
    'use strict';
    new App();
});
