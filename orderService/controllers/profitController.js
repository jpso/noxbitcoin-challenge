'use strict'

const bitmex = require('../services/bitmex.js');

const sumPositions = (orders) => {
  const reducer = (acc, currentValue) => acc + currentValue.realisedPnl;
  return orders.reduce(reducer, 0);
}

module.exports = {
  getProfit: async function(req, res) {
    try {
      const positions = await bitmex.retrievePositions();
      const sumOfPositions = sumPositions(positions);

      res.json(sumOfPositions);
    } catch(error) {
      res.json(error);
    }
  }
}
