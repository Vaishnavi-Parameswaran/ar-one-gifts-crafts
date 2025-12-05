// src/pages/CraftHome.js → FINAL FIGMA-ACCURATE VERSION
import React from 'react';
import Navbar from '../components/Navbar';

const CraftHome = () => {
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
            Where Every Craft<br />Tells a Story
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#2e7d72',
            lineHeight: '1.7',
            marginBottom: '40px'
          }}>
            Discover handcrafted wonders and unique artisanal expressions.
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
              Explore Crafts
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
              Start Selling
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

      {/* FEATURED CRAFTS – 100% FIGMA MATCH */}
      <div style={{ padding: '140px 80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '48px', color: '#004d40', marginBottom: '80px', fontWeight: '700' }}>
          Featured Crafts
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
          {[
            { name: "Enchanted Owl Carving", price: "$120.00", desc: "A meticulously hand-carved wooden owl...", img: "https://images.unsplash.com/photo-1583512603806-077998240c7a?w=600" },
            { name: "Vibrant Tribal Basket", price: "$85.00", desc: "Handwoven with natural dyes, this basket...", img: "https://images.unsplash.com/photo-1586023492125-27b2c5736457?w=600" },
            { name: "Abstract Earth Painting", price: "$180.00", desc: "An evocative abstract painting using rich earth tones...", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600" }
          ].map(craft => (
            <div
              key={craft.name}
              style={{
                background: 'white',
                borderRadius: '50px',
                overflow: 'hidden',
                width: '380px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                transition: 'all 0.4s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-20px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img src={craft.img} alt={craft.name} style={{ width: '100%', height: '340px', objectFit: 'cover' }} />
              <div style={{ padding: '36px' }}>
                <h3 style={{ fontSize: '26px', color: '#004d40', marginBottom: '12px', fontWeight: '700' }}>
                  {craft.name}
                </h3>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
                  {craft.desc}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', fontWeight: '800', color: '#004d40' }}>
                    {craft.price}
                  </span>
                  <button style={{
                    background: 'transparent',
                    color: '#004d40',
                    border: '2px solid #004d40',
                    padding: '12px 32px',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: '600'
                  }}>
                    View Craft
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rest of your sections (Shop by Category, Artisans, etc.) can stay as before */}
      {/* Or I can send the full updated file if you want! */}

{/* MEET OUR ARTISANS */}
      <div style={{ padding: '140px 80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '48px', color: '#004d40', marginBottom: '80px', fontWeight: '700' }}>
          Meet Our Top Artisans
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
          {['Elara Stone', 'Kai Lin', 'Arya Sharma'].map((name, i) => (
            <div key={name} style={{
              background: 'white',
              borderRadius: '40px',
              padding: '40px 30px',
              width: '320px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <img
                src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 10}.jpg`}
                alt={name}
                style={{ width: '120px', height: '120px', borderRadius: '50%', marginBottom: '20px' }}
              />
              <h3 style={{ fontSize: '24px', color: '#004d40' }}>{name}</h3>
              <div style={{ color: '#ffa000', fontSize: '20px', margin: '10px 0' }}>★★★★★</div>
              <p style={{ color: '#666', fontSize: '15px' }}>Exquisite Ceramic Pottery</p>
              <button style={{
                marginTop: '16px',
                background: 'transparent',
                color: '#004d40',
                border: '2px solid #004d40',
                padding: '10px 30px',
                borderRadius: '50px',
                fontWeight: '600'
              }}>
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* COMMUNITY STORIES */}
      <div style={{ padding: '100px 80px', background: '#f0f7f7', textAlign: 'center' }}>
        <h2 style={{ fontSize: '48px', color: '#004d40', marginBottom: '70px' }}>
          Stories from Our Community
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {[
            "The personalized wooden carving I received was beyond my expectations...",
            "I'm so impressed with the unique handwoven scarf. It's soft, vibrant..."
          ].map((text, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '40px',
              borderRadius: '30px',
              maxWidth: '500px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.08)'
            }}>
              <p style={{ fontStyle: 'italic', color: '#555', lineHeight: '1.8' }}>"{text}"</p>
              <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <div style={{ textAlign: 'left' }}>
                  <strong>Sophia R.</strong><br />
                  <small>Verified Buyer</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JOIN COMMUNITY */}
      <div style={{
        background: 'linear-gradient(135deg, #004d40, #00251a)',
        padding: '120px 80px',
        textAlign: 'center',
        color: 'white',
        marginTop: '100px'
      }}>
        <h2 style={{ fontSize: '52px', marginBottom: '24px', fontWeight: '800' }}>
          Join Our Community of Creators
        </h2>
        <button style={{
          background: 'white',
          color: '#004d40',
          padding: '20px 60px',
          border: 'none',
          borderRadius: '50px',
          fontSize: '22px',
          fontWeight: '700',
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          Start Your Artisan Journey
        </button>
      </div>

      {/* FOOTER */}
      <footer style={{
        background: '#00251a',
        color: '#b2dfdb',
        textAlign: 'center',
        padding: '60px 20px',
        fontSize: '16px'
      }}>
        <p>© 2025 AR One Crafts & Gifts. All rights reserved.</p>
      </footer>
    </div>
  );
};



  

export default CraftHome;