const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();

router.put('/:id', async (req, res) => {
  try {
    const { name, image, description, brand, category, price, countInStock } = req.body;

    if (!name || !image || !description || !brand || !category || !price || !countInStock) {
      console.error('Missing required fields:', { name, image, description, brand, category, price, countInStock });
      return res.status(400).json({ message: 'All fields are required' });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.name = name;
    product.image = image;
    product.description = description;
    product.brand = brand;
    product.category = category;
    product.price = price;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;