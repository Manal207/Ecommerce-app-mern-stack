// const asyncHandler = require('express-async-handler');
// const Order = require('../models/orderModel');

// // @desc    Create new order
// // @route   POST /api/orders
// // @access  Public (if not using protect middleware)
// const addOrderItems = asyncHandler(async (req, res) => {
//   const {
//     orderItems,
//     shippingAddress,
//     paymentMethod,
//     itemsPrice,
//     shippingPrice,
//     taxPrice,
//     totalPrice,
//   } = req.body;

//   if (orderItems && orderItems.length === 0) {
//     res.status(400);
//     throw new Error('No order items');
//     return;
//   } else {
//     const order = new Order({
//       orderItems,
//       shippingAddress,
//       paymentMethod,
//       itemsPrice,
//       shippingPrice,
//       taxPrice,
//       totalPrice,
//     });

//     const createdOrder = await order.save();
//     res.status(201).json(createdOrder);
//   }
// });

// module.exports = {
//   addOrderItems,
// };


// // const asyncHandler = require('express-async-handler');
// // const Order = require('../models/orderModel');

// // // @desc    Create new order
// // // @route   POST /api/orders
// // // @access  Private
// // const addOrderItems = asyncHandler(async (req, res) => {
// //   const {
// //     orderItems,
// //     shippingAddress,
// //     paymentMethod,
// //     itemsPrice,
// //     shippingPrice,
// //     taxPrice,
// //     totalPrice,
// //   } = req.body;

// //   if (orderItems && orderItems.length === 0) {
// //     res.status(400);
// //     throw new Error('No order items');
// //     return;
// //   } else {
// //     const order = new Order({
// //       user: req.user._id,
// //       orderItems,
// //       shippingAddress,
// //       paymentMethod,
// //       itemsPrice,
// //       shippingPrice,
// //       taxPrice,
// //       totalPrice,
// //     });

// //     const createdOrder = await order.save();

// //     res.status(201).json(createdOrder);
// //   }
// // });

// // module.exports = {
// //   addOrderItems,
// // };
