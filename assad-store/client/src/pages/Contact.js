import React from 'react';
import Navbar from '../components/Navbar'; // Assurez-vous que le chemin est correct
import './Contact.css'; 

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />
      <header className="contact-header">
        <div className="container">
          <img src="/assad.png" alt="ASSAD Logo" className="contact-logo" />
          <h2>Contactez nous</h2>
        </div>
      </header>
      <main className="contact-main">
        <div className="container">
          <div className="contact-info">
            <div className="contact-section">
              <h3>Commercial : ASSAD INDUSTRIAL / GEELEC</h3>
              <p>Adresse : 20 rue de Mercure – Z.I. Ben Arous – 2013 Ben Arous – Tunisie</p>
            </div>
            <div className="contact-section">
              <h3>Usine : ENAS</h3>
              <p>Adresse : Rue El Fouledh ZI Ben Arous 2013 – Tunisie</p>
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-card">
              <h4>Téléphone</h4>
              <p>(216) 71 388 188 / 186</p>
            </div>
            <div className="contact-card">
              <h4>Fax</h4>
              <p>(216) 71 388 160</p>
            </div>
            <div className="contact-card">
              <h4>Email</h4>
              <p>Batteries.Industrielles@assad.com.tn</p>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
