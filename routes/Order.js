const express = require('express');
const { createOrder, fetchOrdersByUser, deleteOrder, updateOrder ,fetchAllOrders} = require('../controller/Order');

const router = express.Router();
//  /orders is already added in base path
router.post('/', createOrder)
      .get('/own/', fetchOrdersByUser)
      .delete('/:id', deleteOrder)
      .put('/:id', updateOrder)
      .get('/',fetchAllOrders)


exports.router = router;