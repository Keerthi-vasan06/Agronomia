import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import ricefield image
import ricefield from '../Homepage/ricefield.jpg'; // Assuming you have the image here
 // Assuming you have the image here
import carrot from '../Homepage/carrot.jpg'; // Assuming you have the image here
import field3 from '../Homepage/field3.jpeg'; // Assuming you have the image here

const styles = {
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#4a7533', // Earthy green for header to represent nature
    color: '#fff',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#DCDCDC', // Golden yellow to represent harvest
  },
  navButtons: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#6b4226', // Wood-brown color for buttons
    color: '#fff',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.1rem',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
    '&:hover': {
      backgroundColor: '#855e40',
    },
  },
  hero: {
    height: '90vh',
    backgroundImage: `url(${ricefield})`, // Correct syntax for background image
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay to make text stand out
  },
  heroTitle: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '2px 2px 5px rgba(0,0,0,0.5)', // For contrast and readability
    zIndex: 1,
  },
  heroSubtitle: {
    fontSize: '1.75rem',
    margin: '20px 0',
    color: '#fff',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  section: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#f4f1ea', // Light beige (soil color)
    backgroundImage: `url(${field3})`,

  },
  about: {
    backgroundImage: `url(${field3})`, // Now using field3 as the background
    backgroundSize: 'cover', // Ensures the image covers the entire section
    backgroundPosition: 'center', // Centers the image in the section
    padding: '60px 20px', // Keeps spacing consistent
    color: '#f4f1ea', // Light cream for text to contrast against a darker background
    position: 'relative', // Allows for potential overlay
  },
  aboutOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay for text readability
    zIndex: 1,
  },
  aboutTitle: {
    fontSize: '2.5rem',
    color: 'white', // Dark green for contrast
    zIndex: 2,
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  serviceCard: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    background: '#e0dcc5', // Light beige (soil or land color)
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    color: '#3d5b26', // Green text for consistency
    textAlign: 'left',
  },
  testimonials: {
    padding: '60px 20px',
    backgroundColor: '#eaf0e1', // Light greenish background to evoke a fresh, natural feel
    textAlign: 'center',
    color: 'white',
    backgroundImage: `url(${carrot})`,
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
backgroundSize: 'cover',


  },
  footer: {
    backgroundColor: '#4a7533', // Earthy green for footer
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
    fontSize: '1.1rem',
  },
};

const Homepage2 = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/Signup');
  };
  const handleSignIn = () => {
    navigate('/Login');
  };

  return (
    <div className='all'>
      {/* AppBar Section */}
      <nav style={styles.appBar}>
        <div style={styles.logo}>AGRONOMIA</div>
        <div style={styles.navButtons}>
          <button style={styles.button} onClick={handleSignUp}>
            Sign Up
          </button>
          <button style={styles.button} onClick={handleSignIn}>
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div> {/* Dark overlay for readability */}
        <h1 style={styles.heroTitle}>Welcome to AGRONOMIA</h1>
        <p style={styles.heroSubtitle}>Empowering Farmers, Growing Sustainability</p>
      </section>

      {/* About Section */}
      <section style={{ ...styles.section, ...styles.about }}>
  <h2 style={{ ...styles.aboutTitle, color: 'brown' }}>About Us</h2> {/* Darker brown for contrast */}
  <p style={{ color: '#f4f1ea' }}> {/* Light cream color to contrast the green background */}
    AGRONOMIA is dedicated to revolutionizing agriculture through sustainable practices. Our platform provides farmers with the tools they need to grow healthier crops and create a greener, more efficient future.
  </p>
</section>


      {/* Services Section */}
      <section style={styles.section}>
        <h2 style={styles.aboutTitle}>Our Services</h2>
        <div style={styles.servicesGrid}>
          <div style={styles.serviceCard}>
            <h3 style={{ color: '#3d5b26' }}>🌾 Farm Management Tools</h3>
            <p style={{ color: '#4a7533' }}>
              Utilize our advanced digital tools for monitoring crop health, irrigation management, and optimizing yields.
            </p>
          </div>
          <div style={styles.serviceCard}>
            <h3 style={{ color: '#3d5b26' }}>🚜 Agricultural Products</h3>
            <p style={{ color: '#4a7533' }}>
              We provide eco-friendly fertilizers, seeds, and farming equipment to enhance productivity and sustainability.
            </p>
          </div>
          <div style={styles.serviceCard}>
            <h3 style={{ color: '#3d5b26' }}>📚 Training & Education</h3>
            <p style={{ color: '#4a7533' }}>
              Learn the latest sustainable farming techniques through our workshops and online courses.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonials}>
        <h2 style={styles.aboutTitle} color='white'>What Our Farmers Say</h2>
        <h3 style={{ color: 'WHITE' }}>
          “AGRONOMIA has helped us grow our farm's efficiency by 20% while cutting water usage. It’s a game changer!”
        </h3>
        <p style={{ color: 'BLACK' }}>– John Doe, Farmer</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p color='#954535'>&copy; 2024 AGRONOMIA. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage2;
