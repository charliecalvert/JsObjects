const fs = require('fs');
const readAndSortReportDates = require('../audit-check/report-data-reader'); // Adjust the path as needed

jest.mock('fs', () => ({
    promises: {
        readFile: jest.fn()
    }
}));

describe('readAndSortReportDates', () => {
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

    it('should throw an error if reading the file fails', async () => {
        const mockError = new Error('File read error');
        fs.promises.readFile.mockRejectedValue(mockError);

        await expect(readAndSortReportDates()).rejects.toThrow('File read error');
    });
});
