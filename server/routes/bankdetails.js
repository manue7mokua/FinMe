const { PrismaClient } = require(('@prisma/client'));
const prisma = new PrismaClient();
var cors = require('cors');

const express = require('express');
const router = express.Router();

// Route to add bank account to database
router.post('/:id/addAccount', async(req, res) => {
    const { accountNumber, accountName, cardExpiresOn } = req.body;
    // Get userid from url
    const studentId = parseInt(req.params.id);

    // Extract year from expiry date
    let expiryYear = cardExpiresOn.split(' ')[0];

    // Extract month from expiry date
    let expiryMonth = cardExpiresOn.split(' ')[1];

    // Get the last day of month
    const lastDayofMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
    }

    const setCardExpiryDate = (year, month) => {
        const lastDay = lastDayofMonth(expiryYear, expiryMonth);
        const expiryDate = new Date(year, month - 1, lastDay);

        return expiryDate.toISOString();
    }

    const cardExpiryDate = setCardExpiryDate(expiryYear, expiryMonth);

    await prisma.account.create({
        data: {
            studentId,
            accountNumber,
            accountName,
            cardExpiryDate
        }
    })

    // Return json of newly added card data
    res.status(200).send('Great! New card added!');
})

router.get('/:id/accountInfo', async (req, res) => {
    const studentId = parseInt(req.params.id);

    // Get all user accounts
    const bankAccounts = await prisma.account.findMany({
        where: {
            studentId
        }
    });

    res.json(bankAccounts);
})

module.exports = router;
