// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
     
      <>
        {/* TOP BAR */}
        <div style={{
          background: 'linear-gradient(135deg, #00695c, #004d40)',
          padding: '16px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
          fontWeight: '600',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold' }}>AR ONE</div>

          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setOpen(!open)}
              style={{ background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer' }}
            >
              Categories
            </button>
            {open && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, background: 'white',
                minWidth: '180px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', overflow: 'hidden'
              }}>
                <Link to="/gift-home" style={{ display: 'block', padding: '14px 20px', color: '#00695c', textDecoration: 'none' }} onClick={() => setOpen(false)}>Gifts</Link>
                <Link to="/craft-home" style={{ display: 'block', padding: '14px 20px', color: '#00695c', textDecoration: 'none' }} onClick={() => setOpen(false)}>Crafts</Link>
              </div>
            )}
          </div>

          <input 
            type="text" 
            placeholder="Search crafts..." 
            style={{ padding: '12px 24px', borderRadius: '50px', border: 'none', width: '400px', fontSize: '16px' }}
          />

          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <span>Wishlist</span>
            <span>Cart</span>
            <Link to="/login" style={{ color: 'white', textDecoration: 'none', padding: '10px 24px', background: 'rgba(255,255,255,0.2)', borderRadius: '30px' }}>
              Sign In
            </Link>
          </div>
        </div>

        {/* SECONDARY NAV */}
        <div style={{
          background: '#e0f2f1',
          padding: '12px 60px',
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          fontWeight: '500',
          fontSize: '16px'
        }}>
          <a href="/" style={{ color: '#004d40', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: '#004d40', textDecoration: 'none' }}>About Us</a>
          <a href="#" style={{ color: '#004d40', textDecoration: 'none' }}>Return & Refund</a>
          <a href="#" style={{ color: '#004d40', textDecoration: 'none' }}>Order Tracking</a>
          <a href="#" style={{ color: '#004d40', textDecoration: 'none' }}>Get In Touch</a>
          <a href="#" style={{ color: '#004d40', textDecoration: 'none' }}>Q & A</a>
          <a href="#" style={{ color: '#004d40', textDecoration: 'none' }}>Settings</a>
        </div>
      </>
  );
};

export default Navbar;