

import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import '../style/Product.css';


const Product = ({ product }) => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
      if (!isAuthenticated) {
          navigate('/login');
      } else {
          // Add product to cart logic
          dispatch(addToCart(product._id, 1));
          console.log('prod added to cart');

      }
  };

  return (
    <div className="product">
    <Link to={`/product/${product._id}`}>
      <img src={product.image} alt={product.name} className="product-image"/>
    </Link>
    <div className="product-info">
      <Link to={`/product/${product._id}`}>
        <p>{product.name}</p>
      </Link>
      <p>${product.price}</p>
    </div>
    <div className="product-actions">
      <button><i className="fas fa-shopping-cart"></i></button>
      <button><i className="fas fa-heart"></i></button>
    </div>
  </div>
    // <div className="product">
    // <Link to={`/product/${product._id}`}>
    //   <img src={product.image} alt={product.name} className='product-img' />
    // </Link>
    // <div className="product-info">
    //   <Link to={`/product/${product._id}`}>
    //     <p>{product.name}</p>
    //   </Link>
    //   <p>${product.price}</p>
    // </div>
    // <div className="product-actions">
    //   <button onClick={handleAddToCart}>Add to Cart</button>
    //   <button><i className="fas fa-shopping-cart"></i></button>
    //   <button><i className="fas fa-heart"></i></button>
    // </div>
    // </div>
    // <Card className="my-3 p-3 rounded">
    //   <Link to={`/product/${product._id}`}>
    //     <Card.Img src={product.image} variant="top" alt={product.name} />
    //   </Link>
    //   <Card.Body>
    //     <Link to={`/product/${product._id}`}>
    //       <Card.Title as="div">
    //         <strong>{product.name}</strong>
    //       </Card.Title>
    //     </Link>
    //     <Card.Text as="div">
    //       <div className="my-3">
    //         ${product.price}
    //       </div>
    //     </Card.Text>
    //     <button onClick={handleAddToCart}>Add to Cart</button>
    //   </Card.Body>
    // </Card>
  );
};

export default Product;





