const { sum } = require('../src/math');

describe('sum', () => {
    it('sums up two values', () => {
        expect(sum(2, 4)).toBe(6);
    });
});