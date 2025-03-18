import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductUpload = () => {
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

  const submitHandler = async (e) => {
    e.preventDefault();
    const product = {
      name,
      image,
      price,
      description,
      brand,
      category,
      countInStock,
    };
    try {
      await axios.post('/api/addProduct', product);
      alert('Product added successfully');
    } catch (error) {
      console.error(error);
      alert('Error adding product');
    }
  };

  useEffect(() => {
    console.log("ProductUpload mounted");
  }, []);
  
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Count in Stock"
        value={countInStock}
        onChange={(e) => setCountInStock(e.target.value)}
      />
      <input
        type="file"
        onChange={uploadFileHandler}
      />
      {uploading && <p>Uploading...</p>}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductUpload;
