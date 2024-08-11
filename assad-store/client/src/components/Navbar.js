import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
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
              <li>
                <Link to="/admin-login" className="admin-button">
                  <img src="/admin.jpg" alt="Admin Login" className="admin-icon" />
                </Link>
              </li>
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
  );
}

export default Navbar;
