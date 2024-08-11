import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch } from 'react-icons/fa';
import './Home.css';
import './Products.css';


function Products() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Traction batteries',
      description: 'Electric trolleys and pallet trucks, scrubber driers and other electric machines...',
      buttonText: 'Voir Les Produits',
      image: '/traction Batteries.png',
      category: 'traction-batteries',
    },
    {
      id: 2,
      name: 'Solaire Batteries',
      description: 'Photovoltaic public lighting systems, solar traffic lights, pumping...',
      buttonText: 'Voir Les Produits',
      image: '/solaire Batteries.jpg',
      category: 'solaire-batteries',
    },
    {
      id: 3,
      name: 'Stationnaire Batteries',
      description: 'TELECOM, UPS and emergency energy...',
      buttonText: 'Voir Les Produits',
      image: '/stationnaire Batteries.jpg',
      category: 'stationnaire-batteries',
    },
    {
      id: 4,
      name: 'Autres Batteries et Accessories',
      description: 'Li-Ion Battery, Battery Charger...',
      buttonText: 'Voir Les Produits',
      image: '/Autres Batteries et Accessories.jpg',
      category: 'autres-batteries',
    },
  ];

  const handleButtonClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div className="products-page">
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

      <h1>Batteries</h1>
      <p>Découvrez notre gamme de batteries pour divers types de machines électriques.</p>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => handleButtonClick(product.category)}>{product.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
