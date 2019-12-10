'use strict'

const bitmex = require('../services/bitmex.js');

module.exports = {
  getOrders: async function(req, res) {
    try {
      const response = await bitmex.retrieveOrders();
      res.json(response);
    } catch(error) {
      res.json(error);
    }
  },

  placePassiveOrder: async function(req, res) {
    const { orderQty, price } = req.body;

    try {
      const response = await this.bitmex.createPassiveOrder(orderQty, price);
      res.json(response);
    } catch (error) {
      res.json(error);
    }
  }
}
