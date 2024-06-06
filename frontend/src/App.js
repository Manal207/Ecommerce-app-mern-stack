import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListScreen from './screens/productListScreen';
import LoginScreen from './screens/loginScreen';

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' component={ProductListScreen} exact />
          <Route path='/login' component={LoginScreen} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
