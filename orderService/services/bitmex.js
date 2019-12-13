'use strict'

const bitmexNode = require('bitmex-node'),
      creds = require('../../creds.js');

const ORDER_SYMBOL = 'XBTUSD';
const API_KEY = creds.API_KEY;
const API_SECRET = creds.API_SECRET;

const bitmex = new bitmexNode.BitmexAPI({
  "apiKeyID" : API_KEY,
  "apiKeySecret" : API_SECRET,
  "testnet" : true
});

module.exports =  {
  retrieveOrders: async function() {
    return await bitmex.Order.getOrders();
  },

  createPassiveOrder: async function(quantity, orderPrice) {
    return await bitmex.Order.new({
      symbol: ORDER_SYMBOL,
      orderType: 'Limit',
      orderQty: quantity,
      price: orderPrice
    });
  },

  cancelOrder: async function(orderId) {
    return await bitmex.Order.cancel({
      orderID: orderId
    });
  },

  retrievePositions: async function() {
    return await bitmex.Position.get();
  }
};
