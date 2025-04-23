import React from 'react';
import '../styles/styles.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md product-card">
      <img src={product.image} alt={product.title} className="mb-4" />
      <h3 className="font-semibold">{product.title}</h3>
      <p>{product.category}</p>
      <p className="font-bold">Ksh{product.price}</p>
      <button className="mt-4" onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;