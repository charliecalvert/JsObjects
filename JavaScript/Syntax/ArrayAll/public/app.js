const CsvToArray = require('./CsvToArray');
const ArrayAll = require('./ArrayAll');

const app = {
    arrayAll: null,
    csvToArray: null,

    init: function () {
        'use strict';
        if (!this.arrayAll) {
            this.arrayAll = new ArrayAll();
        }

        if (!this.csvToArray) {
            this.csvToArray = new CsvToArray();
        }
        return this.arrayAll;
    },
};

module.exports = app;
