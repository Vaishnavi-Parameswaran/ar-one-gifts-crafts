// src/pages/ForgotPassword.js
import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f7fa, #b2dfdb)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Logo */}
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#004d40' }}>Logo</div>
        <div style={{ fontSize: '20px', color: '#004d40', fontWeight: '600' }}>AR One Crafts</div>
      </div>

      {/* Card */}
      <div style={{
        background: 'linear-gradient(135deg, #00695c, #004d40)',
        borderRadius: '40px',
        width: '460px',
        maxWidth: '90vw',
        padding: '60px 50px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.28)',
        color: 'white',
        textAlign: 'center'
      }}>
        {/* Lock Icon */}
        <div style={{
          width: '80px',
          height: '80px',
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 30px',
          fontSize: '40px'
        }}>
          
        </div>

        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '16px' }}>
          Forgot Password?
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.6', opacity: 0.95, marginBottom: '40px' }}>
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          style={{
            width: '100%',
            padding: '16px 18px',
            borderRadius: '12px',
            border: 'none',
            fontSize: '15px',
            marginBottom: '30px',
            textAlign: 'center'
          }}
        />

        <button style={{
          width: '100%',
          background: 'rgba(255,255,255,0.25)',
          color: 'white',
          padding: '16px',
          border: 'none',
          borderRadius: '12px',
          fontSize: '17px',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Send Reset Link
        </button>

        <Link
          to="/login"
          style={{
            display: 'block',
            marginTop: '30px',
            color: '#b2dfdb',
            fontSize: '15px',
            textDecoration: 'none'
          }}
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;