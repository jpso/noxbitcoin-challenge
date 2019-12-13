'use strict'

const express = require('express'),
      routes = require('../routes/routes.js');

const app = () => {
  const server = express();
  server.use(express.json())
  server.use(routes);
  server.listen();
}

module.exports = { app }
