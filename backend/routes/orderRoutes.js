
// const express = require('express');
// const router = express.Router();
// const { addOrderItems } = require('../controllers/orderController');
// // const { protect } = require('../middleware/authMiddleware');

// router.route('/').post(addOrderItems);

// module.exports = router;

const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');
const auth = require('../middleware/auth');

// Add new order
router.post('/', auth, async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body;

  try {
    const order = new Order({
      user: req.user.id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get user's orders
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;


