const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3090;

const router = require('./routes/');
const core = require('./core/');

app.use(bodyParser.json({type : '*/*'}));
app.use(morgan('combined'));
router(app);

const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port', port);
