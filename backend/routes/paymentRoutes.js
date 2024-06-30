const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const auth = require('../middleware/auth');

router.post('/create-payment-intent', auth, async (req, res) => {
  const { totalPrice } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice * 100, // Stripe expects the amount in cents
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
