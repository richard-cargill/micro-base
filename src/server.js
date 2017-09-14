const middleware = require('./middleware');
const handler = require('./handler');

const server = middleware(handler);

module.exports = server;
