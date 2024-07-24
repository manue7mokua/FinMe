const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/users.js');
const accountRoutes = require('./routes/bankdetails.js');
const incomeRoutes = require('./routes/incomes.js');
const expenseRoutes = require('./routes/expenses.js');
const stockData = require('./routes/stocksAPI/fetchCompanyStockData.js');
var cron = require('node-cron');
const updateStockPrices = require('./routes/stocksAPI/updateStockPrices.js');
const PORT = 5000;

app.use(cors())
app.use(express.json({ extended: false }));

// Use user routes
app.use('/users', userRoutes);

// Use account routes
app.use('/accounts', accountRoutes);

// Use income routes
app.use('/users/', incomeRoutes);

// Use expenses routes
app.use('/expenses', expenseRoutes);

// Get stock data
app.use('/api', stockData);

// Schedule the cron job to run every hour
cron.schedule('0 * * * *', async () => {
    await updateStockPrices();
});

app.listen(PORT);
