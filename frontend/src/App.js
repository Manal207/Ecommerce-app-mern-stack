import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import ProductListScreen from './screens/productListScreen';
import LoginScreen from './screens/loginScreen';
import ProductUpload from './screens/productUploadScreen';
import SignupScreen from './screens/signupScreen';
import CartScreen from './screens/cartScreen';
import CheckoutScreen from './screens/checkoutScreen';
import PaymentScreen from './screens/paymentScreen';
import ProductDetailScreen from './screens/productDetailScreen';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import AdminScreen from './screens/adminScreen';
import AdminnScreen from './screens/adminnScreen';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
stripePromise.then(stripe => {
  if (!stripe) {
    console.error('Stripe did not load correctly.');
  } else {
    console.log('Stripe loaded successfully.');
  }
});


const App = () => {
  return (
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path='/' element={<ProductListScreen />}/>
          <Route path='/login' element={<LoginScreen />}/>
          <Route path='/signup' element={<SignupScreen />}/>
          <Route path="/product/:id" element={<ProductDetailScreen />} /> 
          <Route path='/productUpload' element={<ProductUpload />}/>
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/checkout" element={<CheckoutScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/admin" element={<AdminScreen />}/>
          <Route path="/adminn" element={<AdminnScreen />}/>


        </Routes>
      </Elements>
    </BrowserRouter>
    // <Router>
    //   <main>
    //     <Routes>
    //       <Route path='/' element={<ProductListScreen />} exact />
    //       <Route path='/login' element={<LoginScreen />} />
    //     </Routes>
    //   </main>
    // </Router>

  );
};

export default App;
