// components/CategoryFilter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { listProducts, listProductsByCategory } from '../actions/productActions';
import '../style/CategoryFilter.css';

const CategoryFilter = ({ onCategorySelect }) => {
  const dispatch = useDispatch();

  const categories = [
    { name: 'All', icon: 'fas fa-th' },
    { name: 'Skirts', icon: 'fas fa-skirt' },
    { name: 'Pants', icon: 'fas fa-trousers' },
    { name: 'Dresses', icon: 'fas fa-dress' },
    { name: 'Shirts', icon: 'fas fa-shirt' },
    { name: 'Bags', icon: 'fas fa-bag' },
    { name: 'Shoes', icon: 'fas fa-shoe' },
    { name: 'Jewelry', icon: 'fas fa-jewelry' },
    { name: 'Coats', icon: 'fas fa-coat' },
  ];

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      dispatch(listProducts());
    } else {
      dispatch(listProductsByCategory(category));
    }
    onCategorySelect(category);
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button key={category.name} onClick={() => handleCategoryClick(category.name)} className="category-button">
          <i className={category.icon}></i>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
