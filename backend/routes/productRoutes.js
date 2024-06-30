
const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');
const { getProductsByCategory } = require('../controllers/productController');

router.route('/category/:category').get(getProductsByCategory);

router.route('/').get(getProducts);

module.exports = router;



