
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const addProductRoutes = require('./routes/addProductRoutes')
const authRoutes = require('./routes/authRoutes'); // Make sure the path is correct
const path = require('path'); // Import the path module
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');





dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes); // Ensure this line is present
app.use('/api/upload', uploadRoutes);
app.use('/api/addProduct', addProductRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);








// Make the uploads folder publicly accessible
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const productRoutes = require('./routes/productRoutes.js');
// const orderRoutes = require('./routes/orderRoutes');
// const userRoutes = require('./routes/userRoutes');
// const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// dotenv.config();
// connectDB();

// const app = express();

// app.use(express.json());

// app.get('/health', (req, res) => {
//   res.status(200).send('Server is healthy');
// });


// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/users', userRoutes);


// app.use(notFound);
// app.use(errorHandler);



// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
