const express = require('express');
const router = express.Router();
const predictExpenseCategory = require('../models/predictExpenseCategory');

// Route to predict an expense category
router.post('/predictCategory', (req, res) => {
    const { description } = req.body;
    const predictedCategory = predictExpenseCategory(description);
    res.json({ category: predictedCategory });
  });

module.exports = router;