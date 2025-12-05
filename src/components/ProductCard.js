// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const { image, name, price, rating = 4.5, reviews = 120 } = product;

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      {/* Fixed Height Image Container */}
      <div style={{
        width: '100%',
        height: '280px',           // எல்லா card-க்கும் same height
        overflow: 'hidden',
        position: 'relative'
      }}>
        <img
          src={image || 'https://via.placeholder.com/300'}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',      // இதுதான் magic – crop பண்ணி perfect-ஆ fill பண்ணும்
            objectPosition: 'center'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          fontSize: '20px',
          cursor: 'pointer'
        }}>♥</div>
      </div>

      {/* Card Content */}
      <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: '18px',
          color: '#004d40',
          margin: '0 0 8px 0',
          fontWeight: '600',
          lineHeight: '1.3'
        }}>
          {name}
        </h3>

        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#004d40', marginBottom: '8px' }}>
          ₹{price}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: 'auto' }}>
          <span style={{ color: '#ffb300' }}>
            {'★'.repeat(Math.floor(rating))}
            {'☆'.repeat(5 - Math.floor(rating))}
          </span>
          <span style={{ fontSize: '14px', color: '#666' }}>({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;