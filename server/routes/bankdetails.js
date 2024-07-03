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

    try {
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
    } catch(err) {
        res.status(500).send('Server error!');
    }

    // Return json of newly added card data
    res.status(200).send('Great! New card added!');
})

router.get('/:id/accountInfo', async (req, res) => {
    const studentId = parseInt(req.params.id);

    try {
        // Get all user accounts
        const bankAccounts = await prisma.account.findMany({
            where: {
                studentId
            }
        });
    } catch (err) {
        return res.status(500).send('Server error!')
    }


    return res.json(bankAccounts);
})

// Route to delete a user bank account
router.delete('/:id/deleteAccount/:accountId', async (req, res) => {
    const { accountName } = req.body;
    const studentId = parseInt(req.params.id);
    const accountId = parseInt(req.params.accountId);

    try {
       // Find account specified by accountName
        const account = await prisma.account.findUnique({
            where: {
                studentId,
                id: accountId,
                accountName
            }
        })

        if (!account) {
            return res.status(404).send('That account does not exist!');
        };

        await prisma.account.delete({
            where: {
                id: accountId,
                accountName
            }
        });
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error!');
    }

    // Success if process completed without errors
    res.status(200).send('Account deleted successfully! :)');
})

module.exports = router;
