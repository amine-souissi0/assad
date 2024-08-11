const express = require('express');
const Product = require('../models/Product');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.put('/:id', authMiddleware, async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  product.update(req.body);
  res.json(product);
});

router.delete('/:id', authMiddleware, async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  product.destroy();
  res.json({ message: 'Product deleted' });
});

module.exports = router;
