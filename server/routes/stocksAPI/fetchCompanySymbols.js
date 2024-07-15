const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const router = express.Router();

async function fetchAndCacheCompanySymbols() {
    const apiKey = process.env.FINME_FMP_API_KEY;
    const url = `https://financialmodelingprep.com/api/v3/stock/list?apikey=${apiKey}`;

    try {
        const response = await axios.get(url);
        const companies = response.data;

        if (response) {
            // Cache the company symbols
            const cacheFilePath = path.join(__dirname, 'companySymbols.json');
            fs.writeFileSync(cacheFilePath, JSON.stringify(companies, null, 2));
        } else {
            return ("Error creating file with data")
        }

    } catch (error) {
        return ('Error fetching company symbols:', error);
    }
}

fetchAndCacheCompanySymbols();
