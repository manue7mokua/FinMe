const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/users.js');
const accountRoutes = require('./routes/bankdetails.js');
const incomeRoutes = require('./routes/incomes.js');
const expenseRoutes = require('./routes/expenses.js');
const stockData = require('./routes/stocksAPI/fetchCompanyStockData.js');
const watchlistRoutes = require('/routes/watchlist.js')

const PORT = 5000;

app.use(cors())
app.use(express.json({ extended: false }));

// Use user routes
app.use('/users', userRoutes);

// Use account routes
app.use('/users', accountRoutes);

// Use income routes
app.use('/users/', incomeRoutes);

// Use expenses routes
app.use('/users', expenseRoutes);

// Get stock data
app.use('/api', stockData);

// Add watchlist route
app.use('/users', watchlistRoutes);

app.listen(PORT);
