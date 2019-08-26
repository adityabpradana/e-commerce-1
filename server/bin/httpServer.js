const http = require('http');
const app = require('../app');

const srv = http.createServer(app);
const port  = process.env.PORT || 80;

srv.listen(port, () => console.log('Listen on port: ', port))