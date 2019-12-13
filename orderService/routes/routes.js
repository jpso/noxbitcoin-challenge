'use strict'

const express = require('express'),
      orderController = require('../controllers/orderController.js'),
      profitController = require('../controllers/profitController.js');

const router = express.Router();

router.get('/order', orderController.getOrders);
router.post('/order', orderController.placePassiveOrder);
router.get('/profit', profitController.getProfit);

router.get('/', function (req, res) {
  res.send('hello world')
});
  
module.exports = router;
