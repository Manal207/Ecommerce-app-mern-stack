import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/productForm';
import ProductList from '../components/productList';
import '../style/Admin.css';
import ProductUpload from '../components/productUpload';

const AdminScreen = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // Fetch the list of products
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/api/products');
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className="admin-screen">
      <h1>Admin Dashboard</h1>
      <ProductUpload />
      
      {/* <ProductForm setProducts={setProducts} />
      <ProductList products={products} setProducts={setProducts} /> */}
    </div>
  );
};

export default AdminScreen;