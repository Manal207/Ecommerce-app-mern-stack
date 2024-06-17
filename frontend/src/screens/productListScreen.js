import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';
import { Link } from 'react-router-dom';

const ProductListScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList || {});
  const { loading, error, products } = productList;
  const user = useSelector((state) => state.auth.user);



  useEffect(() => {
    dispatch(listProducts());
    console.log(user);
  }, [dispatch]);

  return (
    <div>

      {user && <h1>Welcome, {user.user.name}!</h1>}
      {user && <Link to="/cart">Cart</Link>}


      <h1>Latest Products</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          {products && products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListScreen;

