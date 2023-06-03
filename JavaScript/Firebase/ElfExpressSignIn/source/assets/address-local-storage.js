import { saveByIndex } from './elf-local-storage.js';

let debug;
if (typeof process !== 'undefined' && typeof process.env !== 'undefined') {
    debug =
        process.env.REACT_APP_ELF_LOGGER === 'sanity-learn-local' ?
            console.log :
            () => { };
} else {
    debug = () => { };
}
const KEY_SET = ['elven-store', 'elven-count'];

/**
 * Save addresses to local storage
 * @param {*} addresses
 * @return {object} the addresses
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */
function setLocalStorage(addresses) {
    debug('SET LOCAL', addresses);
    localStorage.setItem(KEY_SET[0], '1');
    localStorage.setItem(KEY_SET[1], addresses.length);
    addresses.forEach(function(address, index) {
        saveByIndex(address, index);
    });
    return addresses;
}

/**
 * Check if data is loaded
 * @return {boolean} true if data is loaded
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */
function dataLoaded() {
    const elvenStore = localStorage.getItem(KEY_SET[0]);
    return elvenStore === '1';
}

export { setLocalStorage, dataLoaded };
