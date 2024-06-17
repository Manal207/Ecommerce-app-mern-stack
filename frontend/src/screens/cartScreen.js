import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeFromCart } from '../actions/cartActions';

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, loading, error } = cart;

  useEffect(() => {
    dispatch(getCart());
    console.log(cart);
  }, [dispatch]);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    console.log(cart);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          {Array.isArray(cartItems.items) && cartItems.items.length === 0 ? (
            <div>Your cart is empty</div>
          ) : (
            Array.isArray(cartItems.items) && cartItems.items.map((item) => (
              <div key={item.product._id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} />
                <div>
                  <h2>{item.product.name}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => handleRemoveFromCart(item.product._id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CartScreen;
