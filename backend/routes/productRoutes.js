
// const express = require('express');
// const router = express.Router();
// const { getProducts } = require('../controllers/productController');
// const { getProductsByCategory } = require('../controllers/productController');
// const { getProductById } = require('../controllers/productController');

// router.route('/category/:category').get(getProductsByCategory);
// router.route('/').get(getProducts);
// router.route('/:id').get(getProductById); // Route to fetch product by ID

// module.exports = router;

const express = require('express');
const router = express.Router();
const { getProducts, getProductsByCategory, getProductById } = require('../controllers/productController');

router.route('/category/:category').get(getProductsByCategory);
router.route('/product/:id').get(getProductById); // Add this line

router.route('/').get(getProducts);

module.exports = router;



