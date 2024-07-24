const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const axios = require('axios');

// Fetch stock data from the API
const fetchStockData = async (companyAbbrev) => {
  const fmpApiKey = process.env.FINME_FMP_API_KEY;
  const url = `https://financialmodelingprep.com/api/v3/profile/${companyAbbrev}?apikey=${fmpApiKey}`;
  
  try {
    const response = await axios.get(url);
    return response.data[0];
  } catch (error) {
    console.error(`Error fetching data for ${companyAbbrev}:`, error);
    return null;
  }
};

// Update stock prices in the database
const updateStockPrices = async () => {
  try {
    const watchlistItems = await prisma.watchlist.findMany();
    
    for (const item of watchlistItems) {
      const stockData = await fetchStockData(item.companyAbbrev);
      
      if (stockData) {
        await prisma.watchlist.update({
          where: { id: item.id },
          data: {
            stockPrice: `$${stockData.price}`,
            performancePercentage: `${stockData.changes}%`,
          }
        });
      }
    }
  } catch (error) {
    console.error('Error updating stock prices:', error);
  }
};

module.exports = updateStockPrices;