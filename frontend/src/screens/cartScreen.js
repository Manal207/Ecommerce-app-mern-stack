// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCart, removeFromCart } from '../actions/cartActions';
// import { useNavigate } from 'react-router-dom';

// const CartScreen = () => {
//   const dispatch = useDispatch();

//   const cart = useSelector((state) => state.cart);
//   const { cartItems, loading, error } = cart;
//   const navigate = useNavigate();
  

//   useEffect(() => {
//     dispatch(getCart());
//   }, [dispatch]);

//   const handleRemoveFromCart = (productId) => {
//     dispatch(removeFromCart(productId));
//     navigate('/cart');
    
//   };

//   // Add a console log to check the updated cart state
//   console.log(cartItems);

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>{error}</div>
//       ) : (
//         <div>
//           {Array.isArray(cartItems.items) && cartItems.items.length === 0 ? (
//             <div>Your cart is empty</div>
//           ) : (
//             Array.isArray(cartItems.items) && cartItems.items.map((item) => (
//               <div key={item._id} className="cart-item">
//                 <img src={item.product.image} alt={item.product.name} />
//                 <div>
//                   <h2>{item.product.name}</h2>
//                   <p>Quantity: {item.quantity}</p>
//                   <button onClick={() => handleRemoveFromCart(item.product._id)}>Remove</button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartScreen;






// components/CartScreen.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeFromCart } from '../actions/cartActions';

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, loading, error } = cart;

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Add a console log to check the updated cart state
  console.log(cartItems);

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
              <div key={item._id} className="cart-item">
                {item.product && (
                  <>
                    <img src={item.product.image} alt={item.product.name} />
                    <div>
                      <h2>{item.product.name}</h2>
                      <p>Quantity: {item.quantity}</p>
                      <button onClick={() => handleRemoveFromCart(item.product._id)}>Remove</button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CartScreen;

