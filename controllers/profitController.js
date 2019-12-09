'use strict'

const bitmex = require('../services/bitmex.js');

const sumPositions = (orders) => {
  const reducer = (acc, currentValue) => acc + currentValue.realisedPnl;
  return orders.reduce(reducer, 0);
}

module.exports = class ProfitController {
  constructor() {
    this.bitmex = new bitmex();
  }

  getPositions() {
    return this.bitmex.retrievePositions();
  }

  async getProfit(req, res) {
    try {
      const positions = await this.getPositions();
      const sumOfPositions = sumPositions(positions);

      res.json(sumOfPositions);
    } catch(error) {
      res.json(error);
    }
  }
}
