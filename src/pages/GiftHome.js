// src/pages/GiftHome.js
import React from 'react';
import Navbar from '../components/Navbar';
import dummyProducts from '../data/dummyProducts';
import ProductCard from '../components/ProductCard';

const GiftHome = () => {
  return (
    <div style={{ background: '#f8fffe', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>

      <Navbar />
  {/* HERO SECTION – TEXT LEFT + IMAGE RIGHT (LIKE GIFT HOME) */}
      <div style={{
        background: 'linear-gradient(135deg, #b2dfdb 0%, #e0f7fa 100%)',
        borderRadius: '0 0 180px 180px',
        padding: '100px 80px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '80px'
      }}>
        {/* Decorative circle */}
        <div style={{
          position: 'absolute',
          top: '-200px',
          left: '-200px',
          width: '700px',
          height: '700px',
          background: '#004d40',
          borderRadius: '50%',
          opacity: 0.1
        }}></div>

        {/* TEXT – LEFT SIDE */}
        <div style={{ maxWidth: '600px', zIndex: 2 }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '800',
            color: '#004d40',
            lineHeight: '1.1',
            marginBottom: '20px'
          }}>
            Find the Perfect Gift for Every Occasion
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#2e7d72',
            lineHeight: '1.7',
            marginBottom: '40px'
          }}>
            Discover a world of thoughtful and unique gifts.
          </p>

          <div style={{ display: 'flex', gap: '20px' }}>
            <button style={{
              background: '#004d40',
              color: 'white',
              padding: '16px 40px',
              border: 'none',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Shop Gift
            </button>
            <button style={{
              background: 'transparent',
              color: '#004d40', 
              border: '2px solid #004d40',
              padding: '14px 38px',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Customize yours
            </button>
          </div>
        </div>

        {/* IMAGE – RIGHT SIDE */}
        <div style={{ flexShrink: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
            alt="Beautiful handcrafted wood carving"
            style={{
              width: '500px',
              height: '560px',
              objectFit: 'cover',
              borderRadius: '80px',
              border: '18px solid white',
              boxShadow: '0 40px 80px rgba(0,0,0,0.25)'
            }}
          />
        </div>
      </div>

           {/* FEATURED PRODUCTS SECTION – இதை footer-க்கு மேல paste பண்ணு */}
      <div style={{ padding: '100px 60px', backgroundColor: '#fff' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '48px', 
          color: '#004d40', 
          marginBottom: '60px',
          fontWeight: '700'
        }}>
          Featured Products
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '40px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* GIFT BY RECIPIENT & OCCASION */}
      <div style={{
        background: '#00695c',
        margin: '0 60px 120px',
        borderRadius: '70px',
        padding: '80px 60px',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '120px', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontSize: '32px', marginBottom: '30px', fontWeight: '700' }}>Gift by Recipient</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', justifyContent: 'center' }}>
              {['For Him', 'For Her', 'For Kids', 'For Friends', 'For Family', 'For Pets'].map(txt => (
                <button key={txt} style={{
                  background: 'white',
                  color: '#00695c',
                  padding: '14px 34px',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '16px'
                }}>{txt}</button>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '32px', marginBottom: '30px', fontWeight: '700' }}>Occasion-based Gifts</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', justifyContent: 'center' }}>
              {['Birthday', 'Anniversary', 'Graduation', "Valentine's Day", 'Diwali', 'Christmas'].map(txt => (
                <button key={txt} style={{
                  background: 'white',
                  color: '#00695c',
                  padding: '14px 34px',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '16px'
                }}>{txt}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ARE YOU A GIFT CREATOR? */}
      <div style={{
        background: 'linear-gradient(135deg, #26a69a, #004d40)',
        margin: '0 60px 140px',
        borderRadius: '60px',
        padding: '100px 60px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{ fontSize: '52px', marginBottom: '24px', fontWeight: '800' }}>
          Are You a Gift Creator? Join Our Platform!
        </h2>
        <p style={{ fontSize: '21px', maxWidth: '820px', margin: '0 auto 50px', opacity: 0.95 }}>
          Share your unique gift creations with a wider audience and grow your business. Join our community of talented vendors.
        </p>
        <button style={{
          background: 'rgba(255,255,255,0.3)',
          color: 'white',
          padding: '22px 70px',
          border: '3px solid white',
          borderRadius: '50px',
          fontSize: '22px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Join & Sell
        </button>
      </div>

      {/* FOOTER */}
      <footer style={{
        background: '#004d40',
        color: 'white',
        textAlign: 'center',
        padding: '60px 20px',
        fontSize: '16px'
      }}>
        <p>© 2025 AR ONE Gifts & Crafts • All rights reserved</p>
      </footer>
    </div>
  );
};

export default GiftHome;