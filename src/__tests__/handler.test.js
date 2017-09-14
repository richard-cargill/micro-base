/* global it, expect */
const handler = require('../handler');

it('should return middleware function', () => {
  expect(typeof handler).toBe('function');
});
