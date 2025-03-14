const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');
const mongoose = require("mongoose");


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// // Function to get a single product by ID
// const getProductById = async (req, res) => {
//   try {
//     // Convert the ID string to an ObjectId before querying
//     const productId = mongoose.Types.ObjectId(req.params.id);

//     const product = await Product.findById(productId); // Find the product by ID
//     if (!product) {
//       res.status(404).json({ message: 'Product not found' });
//     } else {
//       res.json(product); // Return the product details
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// Function to get a single product by ID
// const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id); // Find the product by ID
//     if (!product) {
//       res.status(404).json({ message: 'Product not found' });
//     } else {
//       res.json(product); // Return the product details
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };


const getProductById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid Product ID' });
    }

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// const getProductById = asyncHandler(async (req, res) => {
//   const product = await Product.findById(req.params.id);

//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404);
//     throw new Error('Product not found');
//   }
// });



const getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  const products = await Product.find({ category });
  res.json(products);
};


module.exports = {
  getProducts, getProductsByCategory, getProductById,
};