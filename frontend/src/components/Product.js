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

const Product = ({ product }) => {
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
      </Card.Body>
    </Card>
  );
};

export default Product;

