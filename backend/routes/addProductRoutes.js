const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, image, description, brand, category, price, countInStock } = req.body;

    if (!name || !image || !description || !brand || !category || !price || !countInStock) {
      console.error('Missing required fields:', { name, image, description, brand, category, price, countInStock });
      return res.status(400).json({ message: 'All fields are required' });
    }

    const product = new Product({
      name,
      image,
      description,
      brand,
      category,
      price,
      countInStock,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
