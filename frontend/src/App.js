import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import ProductListScreen from './screens/productListScreen';
import LoginScreen from './screens/loginScreen';
import ProductUpload from './screens/productUploadScreen';
import SignupScreen from './screens/signupScreen';
import CartScreen from './screens/cartScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductListScreen />}/>
        <Route path='/login' element={<LoginScreen />}/>
        <Route path='/signup' element={<SignupScreen />}/>
        <Route path='/productUpload' element={<ProductUpload />}/>*
        <Route path="/cart" element={<CartScreen />} />


        
  
      </Routes>
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
