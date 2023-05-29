import createDebugMessages from 'debug';
const debug = createDebugMessages('check-testing');

/***************
 * test check-test
 **************/

describe('Check Testing Suite', function () {
  'use strict';

  it('shows we can run a test', async() => {
    debug('See if we can run a test');
    expect(true).toBe(true);
  });
});
