// routes/cart.js
const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const auth = require('../middleware/auth');

// Add item to cart
router.post('/add', auth, async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: req.user.id });

    if (cart) {
      // Check if product already exists in cart
      const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
      if (itemIndex > -1) {
        // Update quantity if item exists
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Add new item to cart
        cart.items.push({ product: productId, quantity });
      }
    } else {
      // Create new cart for user
      cart = new Cart({
        user: req.user.id,
        items: [{ product: productId, quantity }],
      });
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get user's cart
// router.get('/', auth, async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
//     res.json(cart);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// router.get('/', auth, async (req, res) => {
//     try {
//       const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
//       res.json({ items: cart ? cart.items : [] });
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server error');
//     }
//   });

// routes/cart.js
router.get('/', auth, async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
      res.json(cart || { items: [] });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  

// Remove item from cart
router.delete('/remove/:productId', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      return res.status(404).json({ msg: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item.product.toString() !== req.params.productId);

    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
