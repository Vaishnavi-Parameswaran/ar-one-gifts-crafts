// src/pages/Login.js
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
      <div style={{ marginBottom: '30px', fontSize: '32px', fontWeight: 'bold', color: '#004d40' }}>
        Logo
      </div>

      {/* Card */}
      <div style={{
        background: 'linear-gradient(135deg, #00695c, #004d40)',
        borderRadius: '40px',
        width: '420px',
        maxWidth: '90vw',
        padding: '50px 40px',
        boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '34px', fontWeight: '800', marginBottom: '8px' }}>
          Welcome Back
        </h2>
        <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '40px' }}>
          Enter your credentials to access your account.
        </p>

        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '15px',
              marginBottom: '16px'
            }}
          />

          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '15px'
            }}
          />
        </div>

        <Link to="/forgot-password" style={{ color: '#b2dfdb', fontSize: '14px', display: 'block', margin: '20px 0' }}>
          Forgot Password?
        </Link>

        <button style={{
          width: '100%',
          background: '#00332a',
          color: 'white',
          padding: '16px',
          border: 'none',
          borderRadius: '12px',
          fontSize: '17px',
          fontWeight: '600',
          cursor: 'pointer',
          marginBottom: '20px'
        }}>
          Login
        </button>

        <div style={{ margin: '25px 0', position: 'relative', color: 'rgba(255,255,255,0.6)' }}>
          <span style={{ background: '#004d40', padding: '0 15px', zIndex: 2, position: 'relative' }}>OR</span>
          <hr style={{ position: 'absolute', top: '50%', left: 0, right: 0, borderColor: 'rgba(255,255,255,0.2)' }} />
        </div>

        <button style={{
          width: '100%',
          background: 'white',
          color: '#004d40',
          padding: '14px',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer'
        }}>
          Login with Google
        </button>

        <p style={{ marginTop: '30px', fontSize: '15px' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#b2dfdb', fontWeight: '600' }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;