// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../style/Navbar.css';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

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
          <span>Welcome, {user.user.name}</span>
        ) : (
          <Link to="/login"><i className="fas fa-user"></i> Login</Link>
        )}
        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
        <Link to="/wishlist"><i className="fas fa-heart"></i></Link>
      </div>
    </nav>
  );
};

export default Navbar;
