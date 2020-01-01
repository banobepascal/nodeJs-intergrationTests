const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/validation')();
require('./startup/config')();
require('./startup/logging');
require('./startup/route')(app);
require('./startup/db')();

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));