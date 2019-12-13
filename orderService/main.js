'use strict'

const express = require('express'),
      routes = require('./routes/routes.js');

const server = express();
server.use(express.json())
server.use(routes);
server.listen(3000);
