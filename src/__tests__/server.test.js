/* global it, expect */
const micro = require('micro');
const listen = require('test-listen');
const request = require('request-promise');
const server = require('../server');

it('should run server without error', async () => {
  const service = micro(server);
  let error;
  try {
    const url = await listen(service);
    await request(url);
  } catch (err) {
    error = err;
  }

  expect(error).toBeUndefined();
  service.close();
});
