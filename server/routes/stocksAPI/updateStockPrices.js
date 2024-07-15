const { PrismaClient } = require(('@prisma/client'));
const prisma = new PrismaClient();
import cron from 'node-cron';
import axios from 'axios';

const fetchStockData = async (companyAbbrev) => {
  const apiKey = process.env.FINME_FMP_API_KEY;
  const url = `https://financialmodelingprep.com/api/v3/quote/${companyAbbrev}?apikey=${apiKey}`;
  const response = await axios.get(url);
  return response.data[0];
};

const updateStockPrices = async () => {
  try {
    const watchlistItems = await prisma.watchlist.findMany();

    for (const item of watchlistItems) {
      const stockData = await fetchStockData(item.companyAbbrev);

      if (stockData) {
        await prisma.watchlist.update({
          where: { id: item.id },
          data: {
            stockPrice: stockData.price
          }
        });
      }
    }
  } catch (error) {
    console.error('Error updating stock prices:', error);
  }
};

cron.schedule('0 * * * *', updateStockPrices); // Runs every hour
