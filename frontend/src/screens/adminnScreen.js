import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, addProduct, updateProduct, deleteProduct } from '../actions/productActions';

const AdminnScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { products } = productList;

    const [productId, setProductId] = useState(null);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [uploading, setUploading] = useState(false);

    const uploadFileHandler = async (e) => {
      const file = e.target.files[0];
      console.log("File selected:", file); // Debugging
      if (!file) return;
      const formData = new FormData();
      formData.append('image', file);
      setUploading(true);
      try {
        const { data } = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setImage(data.imageUrl);
        console.log("Uploaded successfully:", data.imageUrl); // Debugging
        setUploading(false);
      } catch (error) {
        console.error(error);
        setUploading(false);
      }
    };

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const productData = { name, image, price, description, brand, category, countInStock };

        if (productId) {
          try {
            await axios.put(`/api/editProduct/${productId}`, productData); // Use PUT for updating
            alert('Product updated successfully');
          } catch (error) {
            console.error(error);
            alert('Error updating product');
          }
        } else {
          try {
            await axios.post('/api/addProduct', productData);
            alert('Product added successfully');
          } catch (error) {
            console.error(error);
            alert('Error adding product');
          }
        }
        clearForm();
    };

    const editHandler = (product) => {
        setProductId(product._id);
        setName(product.name);
        setImage(product.image);
        setPrice(product.price);
        setDescription(product.description);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
    };


    const deleteHandler = async (productId) => {
      try {
        await axios.delete(`/api/deleteProduct/${productId}`); // Use DELETE method
        alert('Product deleted successfully');
      } catch (error) {
        console.error(error);
        alert('Error deleting product');
      }
   };

    const clearForm = () => {
        setProductId(null);
        setName('');
        setImage('');
        setPrice('');
        setDescription('');
        setBrand('');
        setCategory('');
        setCountInStock('');
    };

    return (
        <div>
            <h1>Admin Interface</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="text" placeholder="Count in Stock" value={countInStock} onChange={(e) => setCountInStock(e.target.value)} />
                <input type="file" onChange={uploadFileHandler}/>
                {uploading && <p>Uploading...</p>}
                <button type="submit">{productId ? 'Update' : 'Add'} Product</button>
            </form>
            <h2>Product List</h2>
            <ul>
                {products && products.map((product) => (
                    <li key={product._id}>
                        {product.name} - ${product.price}
                        <button onClick={() => editHandler(product)}>Edit</button>
                        <button onClick={() => deleteHandler(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminnScreen;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { listProducts, addProduct, updateProduct, deleteProduct } from '../actions/productActions';

// const AdminnScreen = () => {
//     const dispatch = useDispatch();
//     const [productId, setProductId] = useState(null);
//     const [name, setName] = useState('');
//     const [image, setImage] = useState('');
//     const [price, setPrice] = useState('');
//     const [description, setDescription] = useState('');
//     const [brand, setBrand] = useState('');
//     const [category, setCategory] = useState('');
//     const [countInStock, setCountInStock] = useState('');
//     const [uploading, setUploading] = useState(false);

//     useEffect(() => {
//         dispatch(listProducts());
//     }, [dispatch]);

//     const productList = useSelector(state => state.productList);
//     const { products } = productList;

//     const uploadFileHandler = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return;
//         const formData = new FormData();
//         formData.append('image', file);
//         setUploading(true);
//         try {
//             const { data } = await axios.post('/api/upload', formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });
//             setImage(data.imageUrl);
//             setUploading(false);
//         } catch (error) {
//             console.error(error);
//             setUploading(false);
//         }
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const product = { name, image, price, description, brand, category, countInStock };
//         try {
//             if (productId) {
//               try {
//                 await axios.post('/api/addProduct', product);
//                 alert('Product added successfully');
//               } catch (error) {
//                 console.error(error);
//                 alert('Error adding product');
//               }

//             } else {
//                 await dispatch(addProduct(product));
//                 alert('Product added successfully');
//             }
//             setProductId(null);
//             setName(''); setImage(''); setPrice(''); setDescription('');
//             setBrand(''); setCategory(''); setCountInStock('');
//         } catch (error) {
//             console.error(error);
//             alert('Error saving product');
//         }
//     };

//     const editHandler = (product) => {
//         setProductId(product._id);
//         setName(product.name);
//         setImage(product.image);
//         setPrice(product.price);
//         setDescription(product.description);
//         setBrand(product.brand);
//         setCategory(product.category);
//         setCountInStock(product.countInStock);
//     };

//     const deleteHandler = async (id) => {
//         if (window.confirm('Are you sure you want to delete this product?')) {
//             await dispatch(deleteProduct(id));
//             alert('Product deleted successfully');
//         }
//     };

//     return (
//         <div>
//             <h1>Admin Interface</h1>
//             <form onSubmit={submitHandler}>
//                 <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//                 <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
//                 <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
//                 <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
//                 <input type="text" placeholder="Count in Stock" value={countInStock} onChange={(e) => setCountInStock(e.target.value)} />
//                 <input type="file" onChange={uploadFileHandler} />
//                 {uploading && <p>Uploading...</p>}
//                 <button type="submit">{productId ? 'Update Product' : 'Add Product'}</button>
//             </form>

//             <h2>Product List</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Category</th>
//                         <th>Stock</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products?.map((product) => (
//                         <tr key={product._id}>
//                             <td>{product.name}</td>
//                             <td>${product.price}</td>
//                             <td>{product.category}</td>
//                             <td>{product.countInStock}</td>
//                             <td>
//                                 <button onClick={() => editHandler(product)}>Edit</button>
//                                 <button onClick={() => deleteHandler(product._id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AdminnScreen;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { listProducts, addProduct, updateProduct, deleteProduct } from '../actions/productActions';

// // const AdminnScreen = () => {

// //     const dispatch = useDispatch();


// //     const [productId, setProductId] = useState(null);

// //     const [name, setName] = useState('');
// //     const [image, setImage] = useState('');
// //     const [price, setPrice] = useState('');
// //     const [description, setDescription] = useState('');
// //     const [brand, setBrand] = useState('');
// //     const [category, setCategory] = useState('');
// //     const [countInStock, setCountInStock] = useState('');
// //     const [uploading, setUploading] = useState(false);

  
// //     const uploadFileHandler = async (e) => {
// //       const file = e.target.files[0];
// //       console.log("File selected:", file); // Debugging
// //       if (!file) return;
// //       const formData = new FormData();
// //       formData.append('image', file);
// //       setUploading(true);
// //       try {
// //         const { data } = await axios.post('/api/upload', formData, {
// //           headers: {
// //             'Content-Type': 'multipart/form-data',
// //           },
// //         });
// //         setImage(data.imageUrl);
// //         console.log("Uploaded successfully:", data.imageUrl); // Debugging
// //         setUploading(false);
// //       } catch (error) {
// //         console.error(error);
// //         setUploading(false);
// //       }
// //     };
  
// //     const submitHandler = async (e) => {
// //       e.preventDefault();
// //       const product = {
// //         name,
// //         image,
// //         price,
// //         description,
// //         brand,
// //         category,
// //         countInStock,
// //       };
// //       try {
// //         await axios.post('/api/addProduct', product);
// //         alert('Product added successfully');
// //       } catch (error) {
// //         console.error(error);
// //         alert('Error adding product');
// //       }
// //     };

// //         // Get product list from Redux store
// //     const productList = useSelector(state => state.productList);
// //     const { products } = productList;
    

    
// //     return (
// //       <div>
// //         <h1>adminn interface</h1>
// //         <form onSubmit={submitHandler}>
// //         <input
// //           type="text"
// //           placeholder="Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Price"
// //           value={price}
// //           onChange={(e) => setPrice(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Description"
// //           value={description}
// //           onChange={(e) => setDescription(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Brand"
// //           value={brand}
// //           onChange={(e) => setBrand(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Category"
// //           value={category}
// //           onChange={(e) => setCategory(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Count in Stock"
// //           value={countInStock}
// //           onChange={(e) => setCountInStock(e.target.value)}
// //         />
// //         <input
// //           type="file"
// //           onChange={uploadFileHandler}
// //         />
// //         {uploading && <p>Uploading...</p>}
// //         <button type="submit">Add Product</button>
// //       </form>
      
      

// //       </div>

      
      
// //     );
  



// // //   const dispatch = useDispatch();

// // //   // Local state for product form
// // //   const [productId, setProductId] = useState(null);
// // //   const [name, setName] = useState('');
// // //   const [image, setImage] = useState('');
// // //   const [price, setPrice] = useState('');
// // //   const [description, setDescription] = useState('');
// // //   const [brand, setBrand] = useState('');
// // //   const [category, setCategory] = useState('');
// // //   const [countInStock, setCountInStock] = useState('');

// // //   // Get product list from Redux store
// // //   const productList = useSelector(state => state.productList);
// // //   const { products } = productList;

// // //   useEffect(() => {
// // //     dispatch(listProducts());
// // //   }, [dispatch]);

// // //   // Handle product submission (Add or Update)
// // //   const submitHandler = (e) => {
// // //     e.preventDefault();
// // //     const productData = { name, image, price, description, brand, category, countInStock };

// // //     if (productId) {
// // //       dispatch(updateProduct(productId, productData)); // Update product
// // //     } else {
// // //       dispatch(addProduct(productData)); // Add new product
// // //     }

// // //     // Reset form after submission
// // //     resetForm();
// // //   };

// // //   // Edit Product
// // //   const handleEdit = (product) => {
// // //     setProductId(product._id);
// // //     setName(product.name);
// // //     setImage(product.image);
// // //     setPrice(product.price);
// // //     setDescription(product.description);
// // //     setBrand(product.brand);
// // //     setCategory(product.category);
// // //     setCountInStock(product.countInStock);
// // //   };

// // //   // Delete Product
// // //   const handleDelete = (id) => {
// // //     if (window.confirm('Are you sure you want to delete this product?')) {
// // //       dispatch(deleteProduct(id));
// // //     }
// // //   };

// // //   // Reset form
// // //   const resetForm = () => {
// // //     setProductId(null);
// // //     setName('');
// // //     setImage('');
// // //     setPrice('');
// // //     setDescription('');
// // //     setBrand('');
// // //     setCategory('');
// // //     setCountInStock('');
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>{productId ? 'Edit Product' : 'Add Product'}</h2>
// // //       <form onSubmit={submitHandler}>
// // //         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
// // //         <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
// // //         <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
// // //         <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
// // //         <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
// // //         <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
// // //         <input type="number" placeholder="Stock" value={countInStock} onChange={(e) => setCountInStock(e.target.value)} required />
// // //         <button type="submit">{productId ? 'Update' : 'Add'}</button>
// // //         {productId && <button type="button" onClick={resetForm}>Cancel</button>}
// // //       </form>

// // //       <h2>Product List</h2>
// //       // <table>
// //       //   <thead>
// //       //     <tr>
// //       //       <th>Name</th>
// //       //       <th>Price</th>
// //       //       <th>Category</th>
// //       //       <th>Stock</th>
// //       //       <th>Actions</th>
// //       //     </tr>
// //       //   </thead>
// //       //   <tbody>
// //       //     {products?.map((product) => (
// //       //       <tr key={product._id}>
// //       //         <td>{product.name}</td>
// //       //         <td>${product.price}</td>
// //       //         <td>{product.category}</td>
// //       //         <td>{product.countInStock}</td>
// //       //         <td>
// //       //           <button onClick={() => handleEdit(product)}>Edit</button>
// //       //           <button onClick={() => handleDelete(product._id)}>Delete</button>
// //       //         </td>
// //       //       </tr>
// //       //     ))}
// //       //   </tbody>
// //       // </table>
// // //     </div>
// //   // );
// // };

// // export default AdminnScreen;
