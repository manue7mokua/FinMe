const express = require('express');
const { PrismaClient } = require(('@prisma/client'));
const prisma = new PrismaClient();
const auth = require('../middleware/auth.js');

const router = express.Router();

router.post('/add', auth, async (req, res) => {
  const { companyName, companyAbbrev } = req.body;
  const userId = req.user.id;

  try {
    const newWatchlistItem = await prisma.watchlist.create({
      data: {
        userId,
        companyName,
        companyAbbrev
      }
    });

    res.status(200).json(newWatchlistItem);
  } catch (error) {
    console.error('Error adding company to watchlist:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
