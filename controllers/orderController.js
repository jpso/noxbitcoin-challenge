'use strict'

const bitmex = require('../services/bitmex.js');

module.exports = class OrderController {
  constructor() {
    this.bitmex = new bitmex();
  }

  async getOrders(req, res) {
    try {
      const response = await this.bitmex.retrieveOrders();
      res.json(response);
    } catch(error) {
      res.json(error);
    }
  }

  async placePassiveOrder(req, res) {
    const { orderQty, price } = req.body;

    try {
      const response = await this.bitmex.createPassiveOrder(orderQty, price);
      res.json(response);
    } catch (error) {
      res.json(error);
    }
  }
}
