'use strict'

const WebSocket = require('ws'),
      creds = require('../creds.js'),
      crypto = require('crypto');

const ws = new WebSocket('wss://testnet.bitmex.com/realtime');
const API_KEY = creds.API_KEY;
const API_SECRET = creds.API_SECRET;

ws.on('open', function open() {
  let expires = (new Date().getTime()) + 5;
  let signature = crypto.createHmac('sha256', API_SECRET).update('GET/realtime' + expires).digest('hex');
  let message = `{"op": "authKeyExpires", "args": ["${API_KEY}", ${expires}, "${signature}"]}`;
  console.log(message);
  ws.send(message);

  ws.send('{"op": "subscribe", "args": ["order"]}'); 
});

ws.on('message', function incoming(data) {
  console.log(data);
});


