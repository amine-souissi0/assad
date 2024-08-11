import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch } from 'react-icons/fa';
import './Home.css';
import './DetailedProduct.css';

function DetailedProduct({ cart, setCart }) {
  const { category } = useParams();

  const products = {
    'solaire-batteries': [
      {
        id: 1,
        name: 'Monobloc',
        image: '/traction Batteries.png',
        description: 'High-quality monobloc batteries.',
        price: '874.270 د.ت',
      },
      {
        id: 2,
        name: 'TS',
        image: '/ts.png',
        description: 'Durable TS batteries.',
        price: '444.270 د.ت',
      },
      {
        id: 3,
        name: 'OPZV',
        image: '/OPZV.png',
        description: 'Reliable OPZV batteries.',
        price: '437.017 د.ت',
      },
    ],
    'traction-batteries': [
      {
        id: 1,
        name: 'Traction batteries',
        image: '/traction batteries.png',
        description: 'High-performance traction batteries.',
        price: '1000.000 د.ت',
      },
      {
        id: 2,
        name: 'Small traction battery',
        image: '/Small traction battery.png',
        description: 'Compact and efficient small traction batteries.',
        price: '500.000 د.ت',
      },
    ],
    'stationnaire-batteries': [
      {
        id: 1,
        name: 'TELECOM/UPS',
        image: '/telecom.png',
        description: 'Reliable TELECOM/UPS batteries.',
        price: '1200.000 د.ت',
      },
      {
        id: 2,
        name: 'OPZS',
        image: '/OPZS.png',
        description: 'High-capacity OPZS batteries.',
        price: '1500.000 د.ت',
      },
      {
        id: 3,
        name: 'UPS/Backup Power',
        image: '/upss.png',
        description: 'Efficient UPS/Backup Power batteries.',
        price: '800.000 د.ت',
      },
      {
        id: 4,
        name: 'OPZV',
        image: '/OPZV.png',
        description: 'Reliable OPZV batteries.',
        price: '1000.000 د.ت',
      },
    ],
    'autres-batteries': [
      {
        id: 1,
        name: 'Lithium batteries',
        image: '/LITHIUM BATTERIES.png',
        description: 'High-performance lithium batteries.',
        price: '2000.000 د.ت',
      },
      {
        id: 2,
        name: 'Battery chargers',
        image: '/bcc.png',
        description: 'Efficient battery chargers.',
        price: '300.000 د.ت',
      },
      {
        id: 3,
        name: 'Connectors',
        image: '/conn.png',
        description: 'Durable connectors.',
        price: '100.000 د.ت',
      },
    ],
    // Add other categories and products as needed
  };

  const categoryProducts = products[category] || [];

  const addToCart = async (product) => {
    setCart([...cart, product]);

    try {
      await axios.post('http://localhost:5000/api/orders', {
        product_id: product.id,
        product_name: product.name,
        product_price: product.price,
        user_id: 1, // Assuming a logged-in user with id 1
      });
      alert(`${product.name} has been added to your cart and order saved to database.`);
    } catch (error) {
      console.error('Error saving order to database:', error);
      alert('Failed to save order to database.');
    }
  };

  return (
    <div className="detailed-product-page">
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

      <h1>{category.replace('-', ' ')}</h1>
      <div className="products-grid">
        {categoryProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailedProduct;
