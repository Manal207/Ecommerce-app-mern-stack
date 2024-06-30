// screens/ProductListScreen.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, listProductsByCategory } from '../actions/productActions';
import Product from '../components/Product';
import CategoryFilter from '../components/categoryFilter';
import Navbar from '../components/Navbar';
import '../style/ProductListScreen.css';
// import './ProductListScreen.css';

const ProductListScreen = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');

  const productList = useSelector((state) => state.productList || {});
  const productCategory = useSelector((state) => state.productCategory || {});
  const { loading, error, products } = category === 'All' || category === '' ? productList : productCategory;
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (category === 'All' || category === '') {
      dispatch(listProducts());
    } else {
      dispatch(listProductsByCategory(category));
    }
  }, [dispatch, category]);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div>
      <Navbar />
      <CategoryFilter onCategorySelect={handleCategorySelect} />
      <div className="products-container">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : products && products.length === 0 ? (
          <div>No products available in this category.</div>
        ) : (
          <div className="products-grid">
            {products && products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListScreen;




// // screens/ProductListScreen.js
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { listProducts, listProductsByCategory } from '../actions/productActions';
// import Product from '../components/Product';
// import { Link } from 'react-router-dom';
// import CategoryFilter from '../components/categoryFilter';
// import Navbar from '../components/Navbar';

// const ProductListScreen = () => {
//   const dispatch = useDispatch();
//   const [category, setCategory] = useState('');

//   const productList = useSelector((state) => state.productList || {});
//   const productCategory = useSelector((state) => state.productCategory || {});
//   const { loading, error, products } = category ? productCategory : productList;
//   const user = useSelector((state) => state.auth.user);

//   useEffect(() => {
//     if (category) {
//       dispatch(listProductsByCategory(category));
//     } else {
//       dispatch(listProducts());
//     }
//   }, [dispatch, category]);

//   const handleCategorySelect = (selectedCategory) => {
//     setCategory(selectedCategory);
//   };

//   return (
//     <div>
//       <Navbar />
//       {user && <h1>Welcome, {user.user.name}!</h1>}
//       {user && <Link to="/cart">Cart</Link>}

//       <h1>Filter Products</h1>
//       <CategoryFilter onCategorySelect={handleCategorySelect} />

//       <h1>Latest Products</h1>
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>{error}</div>
//       ) : products && products.length === 0 ? (
//         <div>No products available in this category.</div>
//       ) : (
//         <div>
//           {products && products.map((product) => (
//             <Product key={product._id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductListScreen;


// // // screens/ProductListScreen.js
// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { listProducts, listProductsByCategory } from '../actions/productActions';
// // import Product from '../components/Product';
// // import { Link } from 'react-router-dom';
// // import CategoryFilter from '../components/categoryFilter';

// // const ProductListScreen = () => {
// //   const dispatch = useDispatch();
// //   const [category, setCategory] = useState('');

// //   const productList = useSelector((state) => state.productList || {});
// //   const productCategory = useSelector((state) => state.productCategory || {});
// //   const { loading, error, products } = category ? productCategory : productList;
// //   const user = useSelector((state) => state.auth.user);

// //   useEffect(() => {
// //     if (category) {
// //       dispatch(listProductsByCategory(category));
// //     } else {
// //       dispatch(listProducts());
// //     }
// //   }, [dispatch, category]);

// //   const handleCategorySelect = (selectedCategory) => {
// //     setCategory(selectedCategory);
// //   };

// //   return (
// //     <div>
// //       {user && <h1>Welcome, {user.user.name}!</h1>}
// //       {user && <Link to="/cart">Cart</Link>}

// //       <h1>Filter Products</h1>
// //       <CategoryFilter onCategorySelect={handleCategorySelect} />

// //       <h1>Latest Products</h1>
// //       {loading ? (
// //         <div>Loading...</div>
// //       ) : error ? (
// //         <div>{error}</div>
// //       ) : (
// //         <div>
// //           {products && products.map((product) => (
// //             <Product key={product._id} product={product} />
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProductListScreen;


// // // // screens/ProductListScreen.js
// // // import React, { useEffect, useState } from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { listProducts, listProductsByCategory } from '../actions/productActions';
// // // import Product from '../components/Product';
// // // import { Link } from 'react-router-dom';
// // // import CategoryFilter from '../components/categoryFilter';

// // // const ProductListScreen = () => {
// // //   const dispatch = useDispatch();
// // //   const [category, setCategory] = useState('');

// // //   const productList = useSelector((state) => state.productList || {});
// // //   const productCategory = useSelector((state) => state.productCategory || {});
// // //   const { loading, error, products } = category ? productCategory : productList;
// // //   const user = useSelector((state) => state.auth.user);

// // //   useEffect(() => {
// // //     if (category) {
// // //       dispatch(listProductsByCategory(category));
// // //     } else {
// // //       dispatch(listProducts());
// // //     }
// // //   }, [dispatch, category]);

// // //   const handleCategorySelect = (selectedCategory) => {
// // //     setCategory(selectedCategory);
// // //   };

// // //   return (
// // //     <div>
// // //       {user && <h1>Welcome, {user.user.name}!</h1>}
// // //       {user && <Link to="/cart">Cart</Link>}

// // //       <h1>Filter Products</h1>
// // //       <CategoryFilter onCategorySelect={handleCategorySelect} />

// // //       <h1>Latest Products</h1>
// // //       {loading ? (
// // //         <div>Loading...</div>
// // //       ) : error ? (
// // //         <div>{error}</div>
// // //       ) : (
// // //         <div>
// // //           {products && products.map((product) => (
// // //             <Product key={product._id} product={product} />
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ProductListScreen;
