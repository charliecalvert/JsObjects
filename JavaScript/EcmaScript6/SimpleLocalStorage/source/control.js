/**
 * Created by charlie on 11/5/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { clearLocalStorage, saveByIndex } from './elf-local-storage';
import ElfApp from "./ElfApp";

const debug = process.env.REACT_APP_ELF_LOGGER === 'storage-control' ? console.log : () => {};

let simpleObjects = [];
for (let i = 1; i < 120; i++) {
    let item = {};
    item.year = 1900 + i;
    simpleObjects.push(item);
}

const KEY_SET = ['elven-store', 'elven-count'];

function setLocalStorage(items) {
    debug('SET LOCAL', items);
    localStorage.setItem(KEY_SET[0], '1');
    localStorage.setItem(KEY_SET[1], items.length);
    items.forEach(function(item, index) {
        saveByIndex(item, index);
    });
    return items;
}

window.onload = function() {
    clearLocalStorage();
    setLocalStorage(simpleObjects);

    ReactDOM.render(<ElfApp/>, document.getElementById('root'));
};

