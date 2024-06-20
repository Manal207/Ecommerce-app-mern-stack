// components/CheckoutScreen.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createOrder } from '../actions/orderActions';

import axios from 'axios';

const CheckoutScreen = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log(user);
  }, [user]);

  

  
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

//   const handleProceedToPayment = () => {
//     // Save shipping info to state or context and proceed to payment
//     navigate('/payment');
//   };

const handleProceedToPayment = async () => {
    const order = {
      orderItems: cart.cartItems.items.map((item) => ({
        name: item.product.name,
        qty: item.quantity,
        image: item.product.image,
        price: item.product.price,
        product: item.product._id,
      })),
      shippingAddress: shippingInfo,
      paymentMethod: 'PayPal', // or 'CreditCard'
      itemsPrice: cart.cartItems.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0).toFixed(2),
      shippingPrice: (10).toFixed(2), // Example shipping price
      taxPrice: (0).toFixed(2), // Example tax
      totalPrice: (cart.cartItems.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0) + 10).toFixed(2), // Example total
    };
    console.log('Order:', order); // Log order data
    console.log('User:', user); // Log user data


    dispatch(createOrder(order));
    navigate('/payment');
  };


  return (
    <div>
      <h1>Shipping Information</h1>
      <form>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={shippingInfo.postalCode}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={shippingInfo.country}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleProceedToPayment}>
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutScreen;
