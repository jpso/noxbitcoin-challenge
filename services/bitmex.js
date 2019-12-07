const bitmexNode = require('bitmex-node');

const ORDER_SYMBOL = 'XBTUSD';

module.exports = class BitmexService {
  constructor(apiKey, apiSecret) {
    this.bitmex = new bitmexNode.BitmexAPI({
      "apiKeyID" : apiKey,
      "apiKeySecret" : apiSecret,
      "testnet" : true
    });
  }

  retrieveOrders() {
    return this.bitmex.Order.getOrders({ open: true });
  }

  createPassiveOrder(quantity, orderPrice) {
    return this.bitmex.Order.new({
      symbol: ORDER_SYMBOL,
      orderType: 'Limit',
      orderQty: quantity,
      price: orderPrice
    });
  }

  cancelOrder(orderId) {
    return this.bitmex.Order.cancel({
      orderID: orderId
    });
  }
};
