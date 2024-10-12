/**
 * @fileoverview Unit tests for the readAndSortReportDates function.
 *
 * This module contains tests for the readAndSortReportDates function, which reads JSON data from a file
 * and sorts it by the `lastGitChange` date.
 *
 * @module report-data-reader.test
 */

const fs = require('fs');
const readAndSortReportDates = require('../audit-check/report-data-reader'); // Adjust the path as needed

jest.mock('fs', () => ({
    promises: {
        readFile: jest.fn()
    }
}));

describe('readAndSortReportDates', () => {
    /**
     * Test case for reading and sorting JSON data by `lastGitChange` date.
     *
     * This test mocks the `fs.promises.readFile`
     * function to return a JSON string with unsorted dates.
     * It then verifies that the `readAndSortReportDates`
     * function correctly sorts the data by date.
     */
    it('should read and sort the JSON data by lastGitChange date', async () => {
        const mockData = JSON.stringify([
            { lastGitChange: '2023-01-01T00:00:00Z' },
            { lastGitChange: '2022-01-01T00:00:00Z' },
            { lastGitChange: '2024-01-01T00:00:00Z' }
        ]);

        fs.promises.readFile.mockResolvedValue(mockData);

        const result = await readAndSortReportDates();

        expect(result).toEqual([
            { lastGitChange: '2022-01-01T00:00:00Z' },
            { lastGitChange: '2023-01-01T00:00:00Z' },
            { lastGitChange: '2024-01-01T00:00:00Z' }
        ]);
    });

    /**
     * Test case for handling file read errors.
     *
     * This test mocks the `fs.promises.readFile`
     *  function to throw an error.
     * It then verifies that the `readAndSortReportDates`
     *  function correctly throws an error when reading the
     *  file fails.
     */
    it('should throw an error if reading the file fails', async () => {
        const mockError = new Error('File read error');
        fs.promises.readFile.mockRejectedValue(mockError);

        await expect(readAndSortReportDates()).rejects.toThrow('File read error');
    });
});
