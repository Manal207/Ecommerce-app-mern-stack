// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  // console.log('User from Redux:', user);  // Log the user state
  console.log('isAuthenticated:', useSelector((state) => state.auth.isAuthenticated));
  console.log('user:', useSelector((state) => state.auth.user));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch logout action
    dispatch(logoutUser());
    
    // Redirect to homepage
    navigate('/');
  };


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="navbar-center">
        <h1 className="navbar-logo">the aesthetic shop</h1>
      </div>
      <div className="navbar-right">
        <Link to="/search"><i className="fas fa-search"></i></Link>
        {user ? (
          <span>
            <div>Welcome, {user.user.name}</div>
            <button onClick={handleLogout}>Logout</button>
          </span>
      
        ) : (
          <Link to="/login"><i className="fas fa-user"></i> Login/signup</Link>
        )}
        <Link to="/cart">cart<i className="fas fa-shopping-cart" alt='cart'></i></Link>
        <Link to="/wishlist"><i className="fas fa-heart"></i></Link>
      </div>
    </nav>
  );
};

export default Navbar;
