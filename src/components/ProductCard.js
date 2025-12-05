import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>SKU: {product.sku}</p>
        <p>Stock: {product.stock}</p>
        <div className="price">${product.price}</div>
        <span className={`status ${product.status}`}>
          {product.status === 'active' ? 'Active' :
           product.status === 'out-of-stock' ? 'Out of Stock' :
           product.status === 'featured' ? 'Featured' : 'Hidden'}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;