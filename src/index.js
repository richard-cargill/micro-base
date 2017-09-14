const server = require('./server');

const port = process.env.PORT || 3000;

require('micro')(server).listen(port);
