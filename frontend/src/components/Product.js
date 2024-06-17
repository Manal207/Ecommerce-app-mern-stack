// import React from 'react';
// import { Link } from 'react-router-dom';

// const Product = ({ product }) => {
//   return (
//     <div className='card my-3 p-3 rounded'>
//       <Link to={`/product/${product._id}`}>
//         <img src={product.image} className='card-img-top' alt={product.name} />
//       </Link>
//       <div className='card-body'>
//         <Link to={`/product/${product._id}`}>
//           <h5 className='card-title'>{product.name}</h5>
//         </Link>
//         <div className='card-text'>
//           <h3>${product.price}</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';


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
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            ${product.price}
          </div>
        </Card.Text>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </Card.Body>
    </Card>
  );
};

export default Product;

