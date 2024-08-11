import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch } from 'react-icons/fa';
import './Home.css';

function Home() {
  const heroImage = {
    backgroundImage: 'url(/hero-image.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
  };

  return (
    <div className="home">
      <header className="home-header">
        <div className="container">
          <div className="header-left">
            <img src="/assad.png" alt="ASSAD Logo" className="logo" />
            <nav>
              <ul>
                <li><Link to="/">Presentation</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/csr">CSR</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <Link to="/admin-login" className="admin-button">
                  <img src="/admin.jpg" alt="Admin Login" className="admin-icon" />
                </Link>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <FaSearch />
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com"><FaFacebookF /></a>
              <a href="https://www.twitter.com"><FaTwitter /></a>
              <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </header>

      <main className="home-main" style={heroImage}>
        <div className="hero-section">
          <h1>Energy Applications Renewable</h1>
          <Link to="/learn-more" className="learn-more-button">Learn More</Link>
        </div>
      </main>

      <section className="contact-section">
        <div className="container">
          <img src="/assad.png" alt="ASSAD Logo" className="contact-logo" />
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p><strong>Sales:</strong> ASSAD INDUSTRIAL / GEELEC</p>
            <p>Address: 20 Mercure Street – Z.I. Ben Arous – 2013 Ben Arous – Tunisia</p>
            <p><strong>Factory:</strong> ENAS</p>
            <p>Address: Rue El Fouledh ZI Ben Arous 2013 – Tunisia</p>
            <p><strong>Phone:</strong> (216) 71 388 188 / 186</p>
            <p><strong>Fax:</strong> (216) 71 388 160</p>
            <p><strong>Email:</strong> Batteries.Industrielles@assad.com.tn</p>
            <div className="social-icons contact-icons">
              <a href="https://www.facebook.com"><FaFacebookF /></a>
              <a href="https://www.instagram.com"><FaTwitter /></a>
              <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="container">
          <p>© 2024 Assad Power. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
