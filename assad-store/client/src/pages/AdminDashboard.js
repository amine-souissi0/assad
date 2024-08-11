import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './AdminDashboard.css';

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ product_id: '', product_name: '', product_price: '', user_id: '' });
  const [editOrder, setEditOrder] = useState({ id: null, product_id: '', product_name: '', product_price: '', user_id: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders').then(response => {
      setOrders(response.data);
    });
  }, []);

  const transformedData = orders.map(order => ({
    name: order.product_name,
    price: parseFloat(order.product_price.replace(' د.ت', ''))
  }));

  const handleAddOrder = () => {
    axios.post('http://localhost:5000/api/orders', newOrder).then(response => {
      setOrders([...orders, { ...newOrder, id: response.data.insertId }]);
      setNewOrder({ product_id: '', product_name: '', product_price: '', user_id: '' });
    }).catch(err => console.error('Error adding order:', err));
  };

  const handleEditOrder = (id) => {
    axios.put(`http://localhost:5000/api/orders/${id}`, editOrder).then(response => {
      setOrders(orders.map(order => order.id === id ? editOrder : order));
      setEditOrder({ id: null, product_id: '', product_name: '', product_price: '', user_id: '' });
    }).catch(err => console.error('Error updating order:', err));
  };

  const handleDeleteOrder = (id) => {
    axios.delete(`http://localhost:5000/api/orders/${id}`).then(response => {
      setOrders(orders.filter(order => order.id !== id));
    }).catch(err => console.error('Error deleting order:', err));
  };

  return (
    <div>
      <Navbar />
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        <section>
          <h2>Orders Overview</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={transformedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section>
          <h2>Manage Orders</h2>
          <table className="orders-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.user_id}</td>
                  <td>{order.product_id}</td>
                  <td>{order.product_name}</td>
                  <td>{order.product_price}</td>
                  <td>
                    <button className="edit-btn" onClick={() => setEditOrder(order)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDeleteOrder(order.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="add-order">
            <h3>Add New Order</h3>
            <input
              type="text"
              placeholder="User ID"
              value={newOrder.user_id}
              onChange={(e) => setNewOrder({ ...newOrder, user_id: e.target.value })}
            />
            <input
              type="text"
              placeholder="Product ID"
              value={newOrder.product_id}
              onChange={(e) => setNewOrder({ ...newOrder, product_id: e.target.value })}
            />
            <input
              type="text"
              placeholder="Product Name"
              value={newOrder.product_name}
              onChange={(e) => setNewOrder({ ...newOrder, product_name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Product Price"
              value={newOrder.product_price}
              onChange={(e) => setNewOrder({ ...newOrder, product_price: e.target.value })}
            />
            <button className="add-btn" onClick={handleAddOrder}>Add Order</button>
          </div>

          {editOrder.id && (
            <div className="edit-order">
              <h3>Edit Order</h3>
              <input
                type="text"
                placeholder="User ID"
                value={editOrder.user_id}
                onChange={(e) => setEditOrder({ ...editOrder, user_id: e.target.value })}
              />
              <input
                type="text"
                placeholder="Product ID"
                value={editOrder.product_id}
                onChange={(e) => setEditOrder({ ...editOrder, product_id: e.target.value })}
              />
              <input
                type="text"
                placeholder="Product Name"
                value={editOrder.product_name}
                onChange={(e) => setEditOrder({ ...editOrder, product_name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Product Price"
                value={editOrder.product_price}
                onChange={(e) => setEditOrder({ ...editOrder, product_price: e.target.value })}
              />
              <button className="update-btn" onClick={() => handleEditOrder(editOrder.id)}>Update Order</button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
