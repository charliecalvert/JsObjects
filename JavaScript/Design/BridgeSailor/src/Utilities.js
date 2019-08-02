/**
 * New node file
 */


'use strict';

const boatList = document.getElementById('boatList');

export const utilities = {
    clear: function () {
        boatList.innerHTML = '';
    },

    show: function (value) {
        console.log(value);
		var entry = document.createElement('li');
		entry.appendChild(document.createTextNode(value));
		boatList.appendChild(entry);
    },

    banner: function (message) {
        this.show("===============");
        this.show(message);
        this.show("===============");
    }

};

