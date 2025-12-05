// src/pages/VerifyEmail.js
import React from 'react';
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0f7fa, #b2dfdb)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#004d40', marginBottom: '8px' }}>
          Logo
        </div>
        <div style={{ fontSize: '20px', color: '#004d40', fontWeight: '600' }}>
          AR One Crafts
        </div>
      </div>

      {/* Card */}
      <div
        style={{
          background: 'linear-gradient(135deg, #00695c, #004d40)',
          borderRadius: '40px',
          width: '460px',
          maxWidth: '90vw',
          padding: '60px 50px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.28)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        {/* Email Icon */}
        <div
          style={{
            width: '80px',
            height: '80px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 30px',
            fontSize: '38px',
          }}
        >
          
        </div>

        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '16px' }}>
          Check your email
        </h2>

        <p style={{ fontSize: '16px', lineHeight: '1.6', opacity: 0.95, marginBottom: '30px' }}>
          We've sent a confirmation link to:<br />
          <strong style={{ color: '#b2dfdb' }}>user.example@email.com</strong>
          <br /><br />
          Please click the link in the email to confirm your email address.
        </p>

        {/* Resend Button */}
        <button
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.25)',
            color: 'white',
            padding: '16px',
            border: 'none',
            borderRadius: '12px',
            fontSize: '17px',
            fontWeight: '600',
            cursor: 'pointer',
            marginBottom: '35px',
          }}
        >
          Send email again
        </button>

        {/* Back to Login */}
        <Link
          to="/login"
          style={{
            display: 'block',
            color: '#b2dfdb',
            fontSize: '15px',
            marginBottom: '20px',
            textDecoration: 'none',
          }}
        >
          Back to Login
        </Link>

        {/* Footer Links */}
        <div style={{ fontSize: '14px', opacity: 0.8 }}>
          <Link to="/signup" style={{ color: '#b2dfdb', margin: '0 12px', textDecoration: 'none' }}>
            Create an Account
          </Link>
          <span>•</span>
          <Link to="/forgot-password" style={{ color: '#b2dfdb', margin: '0 12px', textDecoration: 'none' }}>
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;