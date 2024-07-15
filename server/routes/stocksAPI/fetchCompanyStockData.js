const express = require('express');
const router = express.Router();

router.get('/company/:companyName', async (req, res) => {
  const companyName = req.params.companyName;
  const fmpApiKey = process.env.FINME_FMP_API_KEY;
  const apiNinjasApiKey = process.env.API_NINJAS_API_KEY;

  try {
    const companyResponse = await fetch(`https://financialmodelingprep.com/api/v3/search?query=${companyName}&limit=1&exchange=NASDAQ&apikey=${fmpApiKey}`);
    const companyData = await companyResponse.json();

    if (companyData && companyData.length > 0) {
      const companySymbol = companyData[0].symbol;
      const stockResponse = await fetch(`https://financialmodelingprep.com/api/v3/profile/${companySymbol}?apikey=${fmpApiKey}`);
      const stockData = await stockResponse.json();

      const logoResponse = await fetch(`https://api.api-ninjas.com/v1/logo?name=${companyName}`, {
        headers: { 'X-Api-Key': apiNinjasApiKey }
      });
      const logoData = await logoResponse.json();

      if (stockData && stockData.length > 0) {
        const newCompany = {
          companyIcon: logoData[0].image,
          companyName: companyData[0].name,
          companyAbbrev: companyData[0].symbol,
          stockPrice: `$${stockData[0].price}`,
          performancePercentage: `${stockData[0].changes}%`
        };
        res.json(newCompany);
      } else {
        res.status(404).json({ message: 'Stock data not found' });
      }
    } else {
      res.status(404).json({ message: 'Company not found' });
    }
  } catch (error) {
    console.error(`Error fetching company data: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
