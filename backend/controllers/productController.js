const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  const products = await Product.find({ category });
  res.json(products);
};

module.exports = {
  getProducts, getProductsByCategory
};