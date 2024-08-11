import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import './Cart.css';
import './Home.css';

function Cart() {
  const [cart, setCart] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({});

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/orders');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/orders/${itemId}`);
      fetchCartItems(); // Refresh the cart items after deletion
      alert('Order deleted successfully');
    } catch (error) {
      alert('Failed to delete order from database.');
      console.error('Error deleting order:', error);
    }
  };

  const startEditing = (item, index) => {
    setEditingItem(index);
    setUpdatedDetails(item);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const saveUpdatedItem = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? updatedDetails : item
    );
    setCart(updatedCart);
    setEditingItem(null);
  };

  return (
    <div className="cart-page">
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

      <main>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-grid">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                {editingItem === index ? (
                  <div>
                    <input
                      type="text"
                      name="product_name"
                      value={updatedDetails.product_name}
                      onChange={handleUpdateChange}
                    />
                    <input
                      type="text"
                      name="product_description"
                      value={updatedDetails.product_description}
                      onChange={handleUpdateChange}
                    />
                    <input
                      type="text"
                      name="product_price"
                      value={updatedDetails.product_price}
                      onChange={handleUpdateChange}
                    />
                    <button onClick={() => saveUpdatedItem(index)}>Save</button>
                  </div>
                ) : (
                  <div>
                    <img
                      src={`/images/${item.product_name.replace(/\s+/g, '_').toLowerCase()}.png`}
                      alt={item.product_name}
                      className="cart-item-image"
                    />
                    <h3>{item.product_name}</h3>
                    <p>{item.product_description}</p>
                    <p>{item.product_price}</p>
                    <button onClick={() => startEditing(item, index)}>Edit</button>
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="home-footer">
        <div className="container">
          <p>© 2024 Assad Power. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Cart;
