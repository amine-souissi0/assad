const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'noauthuser',
  password: '',
  database: 'assad_store'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL Connected...');
});

app.post('/api/orders', (req, res) => {
  const order = req.body;
  const sql = 'INSERT INTO orders (product_id, product_name, product_price, user_id) VALUES (?, ?, ?, ?)';
  db.query(sql, [order.product_id, order.product_name, order.product_price, order.user_id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Failed to save order to database.');
    } else {
      res.status(200).send('Order saved successfully');
    }
  });
});

app.get('/api/orders', (req, res) => {
  const sql = 'SELECT * FROM orders';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching orders:', err);
      res.status(500).send('Failed to fetch orders from database.');
    } else {
      res.status(200).json(results);
    }
  });
});

app.delete('/api/orders/:id', (req, res) => {
  const orderId = req.params.id;
  const sql = 'DELETE FROM orders WHERE id = ?';
  db.query(sql, [orderId], (err, result) => {
    if (err) {
      console.error('Error deleting order:', err);
      res.status(500).send('Failed to delete order from database.');
    } else {
      res.status(200).send('Order deleted successfully');
    }
  });
});

// Add /api/products endpoint
app.get('/api/products', (req, res) => {
  const sql = 'SELECT * FROM products'; // Assuming you have a products table
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).send('Failed to fetch products from database.');
    } else {
      res.status(200).json(results);
    }
  });
});

// Add /api/clients endpoint
app.get('/api/clients', (req, res) => {
  const sql = 'SELECT * FROM clients'; // Assuming you have a clients table
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching clients:', err);
      res.status(500).send('Failed to fetch clients from database.');
    } else {
      res.status(200).json(results);
    }
  });
});

app.post('/api/admin-login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'test' && password === 'test') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


app.put('/api/orders/:id', (req, res) => {
  const orderId = req.params.id;
  const { product_id, product_name, product_price, user_id } = req.body;
  const sql = 'UPDATE orders SET product_id = ?, product_name = ?, product_price = ?, user_id = ? WHERE id = ?';
  db.query(sql, [product_id, product_name, product_price, user_id, orderId], (err, result) => {
    if (err) {
      console.error('Error updating order:', err);
      res.status(500).send('Failed to update order in database.');
    } else {
      res.status(200).send('Order updated successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
