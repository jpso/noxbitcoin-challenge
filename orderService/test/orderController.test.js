'use strict'

const orderController = require('../controllers/orderController.js'),
      nock = require('nock'),
      orderResponse = require('./responses/orderResponse.js'),
      chai = require('chai'),
      should = chai.should();
      
const bitmex = require('../services/bitmex.js');

const res = {
  json: (json) => {return json;}
}

describe('ordercontroller', () => {  
  it('Expects to receive list orders', async (done) => {
    nock('https://testnet.bitmex.com/api/v1')
      .get('/order')
      .reply(200, orderResponse);
    
    const orders = await orderController.getOrders({}, res);
  });
});
