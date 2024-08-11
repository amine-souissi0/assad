import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import DetailedProduct from './pages/DetailedProduct';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import News from './pages/News'; // Import de la page News

function App() {
  const [cart, setCart] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:category"
          element={<DetailedProduct cart={cart} setCart={setCart} />}
        />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/admin-login" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
        {isAdmin && <Route path="/admin" element={<AdminDashboard />} />}
      </Routes>
    </Router>
  );
}

export default App;
