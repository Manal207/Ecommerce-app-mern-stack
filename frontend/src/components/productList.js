import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, deleteProduct } from '../actions/productActions';
import { PRODUCT_DELETE_RESET } from '../constants/productConstants';

const ProductList = ({ history }) => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector(state => state.productDelete);
  const { success: deleteSuccess, error: deleteError } = productDelete;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, deleteSuccess]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(id));
    }
  };

  const handleEdit = (id) => {
    history.push(`/admin/product/${id}/edit`);
  };

  return (
    <div>
      <h1>Product List</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {deleteError && <div>{deleteError}</div>}
      {deleteSuccess && <div>Product deleted successfully!</div>}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleEdit(product._id)}>Edit</button>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

// import React from 'react';
// import axios from 'axios';

// const ProductList = ({ products, setProducts }) => {
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/products/product/${id}`);
//       setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
//     } catch (error) {
//       console.error("Error deleting product", error);
//     }
//   };

//   const handleEdit = (product) => {
//     // Redirect to the product form or populate the form for editing (this depends on your routing)
//     console.log('Edit product:', product);
//   };

//   return (
//     <div>
//       <h2>Product List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>Stock</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td>{product.name}</td>
//               <td>{product.price}</td>
//               <td>{product.category}</td>
//               <td>{product.countInStock}</td>
//               <td>
//                 <button onClick={() => handleEdit(product)}>Edit</button>
//                 <button onClick={() => handleDelete(product._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductList;