// screens/ProductDetailScreen.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../actions/productActions';
import Navbar from '../components/Navbar';
// import '../style/ProductDetailScreen.css';

const ProductDetailScreen = () => {



  const dispatch = useDispatch();
  const { id } = useParams(); // Get the product ID from the URL
  console.log (id);

  // const productDetails = useSelector((state) => state.productDetails || {});
  const productDetails = useSelector((state) => state.productDetail);


  const { loading, error, product } = productDetails;
//   console.log("Product Details State:", productDetails);


  // useEffect(() => {
  //   dispatch(getProductDetails(id)); // Fetch product details when component mounts
  // }, [dispatch, id]);

  // console.log(product); // Add this inside your ProductDetailScreen component to see if data is loaded correctly

  useEffect(() => {
    dispatch(getProductDetails(id));
    console.log('Fetching product details for ID:', id);
  }, [dispatch, id]);


  return (
    <div>
      <Navbar />
      <div>this is productdetailscreen</div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        product && (
          <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>{product.category}</p>
              <p>{product.brand}</p>
              <p>{product.countInStock}</p>



              <button>Add to Cart</button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductDetailScreen;