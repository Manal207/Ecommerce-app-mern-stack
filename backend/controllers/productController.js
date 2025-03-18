const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');
const mongoose = require("mongoose");
const upload = require('../config/multerConfig'); // Import the multer upload config



// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});




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




const getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  const products = await Product.find({ category });
  res.json(products);
};

// // @desc    Add a new product
// // @route   POST /api/products
// // @access  Admin
// const addProduct = asyncHandler(async (req, res) => {
//   upload(req, res, async (err) => {
//     if (err) {
//       return res.status(400).json({ message: err });
//     }

//     const { name, price, description, brand, category, countInStock } = req.body;
//     const image = req.file ? req.file.path : ''; // Get the image path

//     if (!name || !price || !description || !category || !countInStock) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const product = new Product({
//       name,
//       image,
//       price,
//       description,
//       brand,
//       category,
//       countInStock,
//     });

//     const createdProduct = await product.save();
//     res.status(201).json(createdProduct);
//   });
// });

// // @desc    Update a product
// // @route   PUT /api/products/:id
// // @access  Admin
// const updateProduct = asyncHandler(async (req, res) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     return res.status(400).json({ message: 'Invalid Product ID' });
//   }

//   const product = await Product.findById(req.params.id);

//   if (!product) {
//     return res.status(404).json({ message: 'Product not found' });
//   }

//   const { name, price, description, brand, category, countInStock } = req.body;
//   const image = req.file ? req.file.path : product.image; // Use the new image if uploaded, else keep the old one


//   product.name = name || product.name;
//   product.image = image || product.image;
//   product.price = price || product.price;
//   product.description = description || product.description;
//   product.brand = brand || product.brand;
//   product.category = category || product.category;
//   product.countInStock = countInStock || product.countInStock;

//   const updatedProduct = await product.save();
//   res.json(updatedProduct);
// });

const addProduct = asyncHandler(async (req, res) => {
  const { name, price, description, brand, category, countInStock } = req.body;

  if (!name || !price || !description || !category || !countInStock) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  let image;
  if (req.file) {
    // If file is uploaded, use the file's URL
    image = `/uploads/${req.file.filename}`;
  }

  const product = new Product({
    name,
    image,  // The image URL from multer will be saved here
    price,
    description,
    brand,
    category,
    countInStock,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Admin
const updateProduct = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid Product ID' });
  }

  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const { name, price, description, brand, category, countInStock } = req.body;

  let image = product.image;  // Retain the existing image if not uploading a new one
  if (req.file) {
    image = `/uploads/${req.file.filename}`;  // If a new image is uploaded, update the image field
  }

  product.name = name || product.name;
  product.image = image;  // Update the image if a new one is uploaded
  product.price = price || product.price;
  product.description = description || product.description;
  product.brand = brand || product.brand;
  product.category = category || product.category;
  product.countInStock = countInStock || product.countInStock;

  const updatedProduct = await product.save();
  res.json(updatedProduct);
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Admin
const deleteProduct = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid Product ID' });
  }

  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  await product.remove();
  res.json({ message: 'Product removed successfully' });
});

module.exports = {
  getProducts,
  getProductById,
  getProductsByCategory,
  addProduct,
  updateProduct,
  deleteProduct
};

