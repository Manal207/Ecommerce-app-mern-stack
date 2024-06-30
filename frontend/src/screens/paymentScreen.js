// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// // import { loadStripe } from '@stripe/stripe-js';
// // import { Elements } from '@stripe/react-stripe-js';
// // import { createPaymentIntent } from '../actions/paymentActions';
// // import { createOrder } from '../actions/orderActions';

// // const stripePromise = loadStripe('your-stripe-public-key');

// // const CheckoutForm = () => {
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const cart = useSelector((state) => state.cart);
// //   const auth = useSelector((state) => state.auth);
// //   const paymentIntent = useSelector((state) => state.paymentIntent);
// //   const { user } = auth;
// //   const { clientSecret, loading: intentLoading } = paymentIntent;

// //   const [paymentMethod, setPaymentMethod] = useState('PayPal');

// //   useEffect(() => {
// //     if (!user) {
// //       navigate('/login');
// //     } else {
// //       const totalPrice = cart.cartItems.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0).toFixed(2);
// //       dispatch(createPaymentIntent(totalPrice));
// //     }
// //   }, [user, navigate, cart.cartItems.items, dispatch]);

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     if (!stripe || !elements) {
// //       return;
// //     }

// //     const cardElement = elements.getElement(CardElement);

// //     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
// //       payment_method: {
// //         card: cardElement,
// //         billing_details: {
// //           name: user.name,
// //         },
// //       },
// //     });

// //     if (error) {
// //       console.error('Payment failed:', error);
// //     } else if (paymentIntent.status === 'succeeded') {
// //       const order = {
// //         orderItems: cart.cartItems.items.map((item) => ({
// //           name: item.product.name,
// //           qty: item.quantity,
// //           image: item.product.image,
// //           price: item.product.price,
// //           product: item.product._id,
// //         })),
// //         shippingAddress: cart.shippingAddress,
// //         paymentMethod: 'Stripe',
// //         itemsPrice: cart.cartItems.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0).toFixed(2),
// //         shippingPrice: (10).toFixed(2),
// //         taxPrice: (0).toFixed(2),
// //         totalPrice: (cart.cartItems.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0) + 10).toFixed(2),
// //       };

// //       dispatch(createOrder(order));
// //       navigate(`/order/${paymentIntent.id}`);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <CardElement />
// //       <button type="submit" disabled={!stripe || intentLoading}>
// //         Pay Now
// //       </button>
// //     </form>
// //   );
// // };

// // const PaymentScreen = () => {
// //   return (
// //     <Elements stripe={stripePromise}>
// //       <CheckoutForm />
// //     </Elements>
// //   );
// // };

// // export default PaymentScreen;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { createPaymentIntent } from '../actions/paymentActions';
// import { createOrder } from '../actions/orderActions';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const cart = useSelector((state) => state.cart);
//   const auth = useSelector((state) => state.auth);
//   const paymentIntent = useSelector((state) => state.paymentIntent);
//   const { user } = auth;
//   const { clientSecret, loading: intentLoading } = paymentIntent;

//   const [paymentMethod, setPaymentMethod] = useState('PayPal');

//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//     } else {
//       const totalPrice = cart.cartItems.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0).toFixed(2);
//       dispatch(createPaymentIntent(totalPrice));
//     }
//   }, [user, navigate, cart.cartItems.items, dispatch]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: cardElement,
//         billing_details: {
//           name: user.name,
//         },
//       },
//     });

//     if (error) {
//       console.error('Payment failed:', error);
//     } else if (paymentIntent.status === 'succeeded') {
//       const order = {
//         orderItems: cart.cartItems.items.map((item) => ({
//           name: item.product.name,
//           qty: item.quantity,
//           image: item.product.image,
//           price: item.product.price,
//           product: item.product._id,
//         })),
//         shippingAddress: cart.shippingAddress,
//         paymentMethod: 'Stripe',
//         itemsPrice: cart.cartItems.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0).toFixed(2),
//         shippingPrice: (10).toFixed(2),
//         taxPrice: (0).toFixed(2),
//         totalPrice: (cart.cartItems.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0) + 10).toFixed(2),
//       };

//       dispatch(createOrder(order));
//       navigate(`/order/${paymentIntent.id}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe || intentLoading}>
//         Pay Now
//       </button>
//     </form>
//   );
// };

// const PaymentScreen = () => {
//   return (
//     <div>
//       <CheckoutForm />
//     </div>
//   );
// };

// export default PaymentScreen;

import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    console.log(cardElement);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const PaymentScreen = () => {
  return (
    <div>
      <CheckoutForm />
    </div>
  );
};

export default PaymentScreen;


