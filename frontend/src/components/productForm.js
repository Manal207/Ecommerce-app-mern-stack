import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '../actions/productActions';
import { PRODUCT_ADD_RESET, PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate

const ProductForm = () => {
  const { id } = useParams(); // Access 'id' directly using useParams
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate for navigation

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const productAdd = useSelector(state => state.productAdd);
  const { loading, success, error } = productAdd;

  const productUpdate = useSelector(state => state.productUpdate);
  const { loading: updateLoading, success: updateSuccess, error: updateError } = productUpdate;

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { name, category, price, image, description };

    if (id) {
      dispatch(updateProduct(id, productData));
    } else {
      dispatch(addProduct(productData));
    }
  };

  useEffect(() => {
    if (updateSuccess) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigate('/admin/productlist');
    }
    if (success) {
      dispatch({ type: PRODUCT_ADD_RESET });
      navigate('/admin/productlist');
    }
  }, [dispatch, success, updateSuccess, navigate]);

  return (
    <div>
      <h1>{id ? 'Update Product' : 'Add Product'}</h1>
      {error && <div>{error}</div>}
      {updateError && <div>{updateError}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading || updateLoading}>
          {loading || updateLoading ? 'Loading...' : id ? 'Update Product' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;


// import { useParams } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addProduct, updateProduct } from '../actions/productActions';
// import { PRODUCT_ADD_RESET, PRODUCT_UPDATE_RESET } from '../constants/productConstants';
// import 

// const ProductForm = () => {
//   const { id } = useParams(); // Access 'id' directly using useParams
//   const dispatch = useDispatch();
//   const history = useHistory(); // Use useHistory for navigation

//   const [name, setName] = useState('');
//   const [category, setCategory] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');
//   const [description, setDescription] = useState('');

//   const productAdd = useSelector(state => state.productAdd);
//   const { loading, success, error } = productAdd;

//   const productUpdate = useSelector(state => state.productUpdate);
//   const { loading: updateLoading, success: updateSuccess, error: updateError } = productUpdate;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const productData = { name, category, price, image, description };

//     if (id) {
//       dispatch(updateProduct(id, productData));
//     } else {
//       dispatch(addProduct(productData));
//     }
//   };

//   useEffect(() => {
//     if (updateSuccess) {
//       dispatch({ type: PRODUCT_UPDATE_RESET });
//       history.push('/admin/productlist');
//     }
//     if (success) {
//       dispatch({ type: PRODUCT_ADD_RESET });
//       history.push('/admin/productlist');
//     }
//   }, [dispatch, success, updateSuccess, history]);

//   return (
//     <div>
//       <h1>{id ? 'Update Product' : 'Add Product'}</h1>
//       {error && <div>{error}</div>}
//       {updateError && <div>{updateError}</div>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Product Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Category</label>
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Price</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Image URL</label>
//           <input
//             type="text"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading || updateLoading}>
//           {loading || updateLoading ? 'Loading...' : id ? 'Update Product' : 'Add Product'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProductForm;


// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { addProduct, updateProduct } from '../actions/productActions';
// // import { PRODUCT_ADD_RESET, PRODUCT_UPDATE_RESET } from '../constants/productConstants';

// // const ProductForm = ({ match, history }) => {
// //   const dispatch = useDispatch();
  
// //   const productId = match.params.id;
// //   const [name, setName] = useState('');
// //   const [category, setCategory] = useState('');
// //   const [price, setPrice] = useState('');
// //   const [image, setImage] = useState('');
// //   const [description, setDescription] = useState('');
  
// //   const productAdd = useSelector(state => state.productAdd);
// //   const { loading, success, error } = productAdd;
  
// //   const productUpdate = useSelector(state => state.productUpdate);
// //   const { loading: updateLoading, success: updateSuccess, error: updateError } = productUpdate;
  
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const productData = { name, category, price, image, description };
    
// //     if (productId) {
// //       dispatch(updateProduct(productId, productData));
// //     } else {
// //       dispatch(addProduct(productData));
// //     }
// //   };

// //   useEffect(() => {
// //     if (updateSuccess) {
// //       dispatch({ type: PRODUCT_UPDATE_RESET });
// //       history.push('/admin/productlist');
// //     }
// //     if (success) {
// //       dispatch({ type: PRODUCT_ADD_RESET });
// //       history.push('/admin/productlist');
// //     }
// //   }, [dispatch, success, updateSuccess, history]);

// //   return (
// //     <div>
// //       <h1>{productId ? 'Update Product' : 'Add Product'}</h1>
// //       {error && <div>{error}</div>}
// //       {updateError && <div>{updateError}</div>}
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Product Name</label>
// //           <input 
// //             type="text" 
// //             value={name} 
// //             onChange={(e) => setName(e.target.value)} 
// //             required 
// //           />
// //         </div>
// //         <div>
// //           <label>Category</label>
// //           <input 
// //             type="text" 
// //             value={category} 
// //             onChange={(e) => setCategory(e.target.value)} 
// //             required 
// //           />
// //         </div>
// //         <div>
// //           <label>Price</label>
// //           <input 
// //             type="number" 
// //             value={price} 
// //             onChange={(e) => setPrice(e.target.value)} 
// //             required 
// //           />
// //         </div>
// //         <div>
// //           <label>Image URL</label>
// //           <input 
// //             type="text" 
// //             value={image} 
// //             onChange={(e) => setImage(e.target.value)} 
// //           />
// //         </div>
// //         <div>
// //           <label>Description</label>
// //           <textarea 
// //             value={description} 
// //             onChange={(e) => setDescription(e.target.value)} 
// //             required 
// //           />
// //         </div>
// //         <button type="submit" disabled={loading || updateLoading}>
// //           {loading || updateLoading ? 'Loading...' : productId ? 'Update Product' : 'Add Product'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ProductForm;



// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const ProductForm = ({ setProducts, product = null }) => {
// // //   const [name, setName] = useState(product ? product.name : '');
// // //   const [price, setPrice] = useState(product ? product.price : '');
// // //   const [description, setDescription] = useState(product ? product.description : '');
// // //   const [brand, setBrand] = useState(product ? product.brand : '');
// // //   const [category, setCategory] = useState(product ? product.category : '');
// // //   const [countInStock, setCountInStock] = useState(product ? product.countInStock : '');
// // //   const [image, setImage] = useState(null);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const formData = new FormData();
// // //     formData.append('name', name);
// // //     formData.append('price', price);
// // //     formData.append('description', description);
// // //     formData.append('brand', brand);
// // //     formData.append('category', category);
// // //     formData.append('countInStock', countInStock);
// // //     if (image) formData.append('image', image);

// // //     try {
// // //       let response;
// // //       if (product) {
// // //         // Update Product
// // //         response = await axios.put(`/api/products/product/${product._id}`, formData, {
// // //           headers: {
// // //             'Content-Type': 'multipart/form-data',
// // //           },
// // //         });
// // //       } else {
// // //         // Add New Product
// // //         response = await axios.post('/api/products', formData, {
// // //           headers: {
// // //             'Content-Type': 'multipart/form-data',
// // //           },
// // //         });
// // //       }
      
// // //       setProducts(prevProducts => [
// // //         ...prevProducts,
// // //         response.data
// // //       ]);

// // //       // Reset form after submission
// // //       setName('');
// // //       setPrice('');
// // //       setDescription('');
// // //       setBrand('');
// // //       setCategory('');
// // //       setCountInStock('');
// // //       setImage(null);
// // //     } catch (error) {
// // //       console.error("Error adding/updating product", error);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <h2>{product ? 'Update Product' : 'Add New Product'}</h2>
// // //       <div>
// // //         <label>Name</label>
// // //         <input
// // //           type="text"
// // //           value={name}
// // //           onChange={(e) => setName(e.target.value)}
// // //           required
// // //         />
// // //       </div>
// // //       <div>
// // //         <label>Price</label>
// // //         <input
// // //           type="number"
// // //           value={price}
// // //           onChange={(e) => setPrice(e.target.value)}
// // //           required
// // //         />
// // //       </div>
// // //       <div>
// // //         <label>Description</label>
// // //         <textarea
// // //           value={description}
// // //           onChange={(e) => setDescription(e.target.value)}
// // //           required
// // //         />
// // //       </div>
// // //       <div>
// // //         <label>Brand</label>
// // //         <input
// // //           type="text"
// // //           value={brand}
// // //           onChange={(e) => setBrand(e.target.value)}
// // //         />
// // //       </div>
// // //       <div>
// // //         <label>Category</label>
// // //         <input
// // //           type="text"
// // //           value={category}
// // //           onChange={(e) => setCategory(e.target.value)}
// // //           required
// // //         />
// // //       </div>
// // //       <div>
// // //         <label>Count in Stock</label>
// // //         <input
// // //           type="number"
// // //           value={countInStock}
// // //           onChange={(e) => setCountInStock(e.target.value)}
// // //           required
// // //         />
// // //       </div>
// // //       <div>
// // //         <label>Image</label>
// // //         <input
// // //           type="file"
// // //           onChange={(e) => setImage(e.target.files[0])}
// // //         />
// // //       </div>
// // //       <button type="submit">{product ? 'Update Product' : 'Add Product'}</button>
// // //     </form>
// // //   );
// // // };

// // // export default ProductForm;