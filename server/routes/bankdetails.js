const { PrismaClient } = require(('@prisma/client'));
const prisma = new PrismaClient();
var cors = require('cors');
const auth = require('../middleware/auth');

const express = require('express');
const router = express.Router();

// Route to add bank account to database
router.post('/:id/addAccount', auth, async(req, res) => {
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

// Route to get all account info details
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

// Route to update bank account details
router.put('/:id/updateAccount/:accountId', async (req, res) => {
    const { accountNumber, accountName, cardExpiresOn } = req.body;
    const studentId = parseInt(req.params.id);
    const accountId = parseInt(req.params.accountId);

    // Extract year from expiry date
    let expiryYear = cardExpiresOn.split(' ')[0];

    // Extract month from expiry date
    let expiryMonth = cardExpiresOn.split(' ')[1];

    try {
        // Validate date inputs
        if (!expiryYear || !expiryMonth) {
            return res.status(400).send('Enter a valid card expiry date!');
        }

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

        // Find the bank account to update
        const account = await prisma.account.findUnique({
            where: {
                id: accountId,
                studentId: studentId
            }
        });

        if (!account) {
            return res.status(404).send('Income source not found!');
        }

        // Update the bank account details
        const updatedCardDetails = await prisma.account.update({
            where: {
                id: accountId
            },
            data: {
                accountNumber,
                accountName,
                cardExpiryDate
            }
        });

        // Return the updated bank account details
        return res.json(updatedCardDetails);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error!');
    }
});

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
        return res.status(500).send('Server error!');
    }

    // Success if process completed without errors
    res.status(200).send('Account deleted successfully! :)');
})

module.exports = router;
