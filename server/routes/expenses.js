const { PrismaClient } = require(('@prisma/client'));
const prisma = new PrismaClient();
var cors = require('cors');

const express = require('express');
const router = express.Router();

// Route to add an user's expense
router.post('/:id/addExpense', async(req, res) => {
    const { expenseType, expenseName, expenseDescription, dateofExpense, isRecurring, bankAccountName } = req.body;

    // Get userid from url
    const studentId = parseInt(req.params.id);

    try {
        // Validate date inputs
        if (!dateofExpense) {
            return res.status(400).send('Enter a valid date!');
        }

        // Parse and format dates
        const expenseDate = new Date(Date.parse(dateofExpense)).toISOString();

        // Find bank account be accountName and studentId
        const bankAccount = await prisma.account.findFirst({
            where: {
                accountName: bankAccountName,
                studentId
            }
        })

        await prisma.expense.create({
            data: {
                studentId,
                accountId: bankAccount.id,
                expenseType,
                expenseName,
                expenseDescription,
                expenseDate,
                isRecurring,
            }
        })
    } catch(err) {
        return res.status(500).send('Server error!');
    }

    res.status(200).send('Great! New expense has been added!');
})

module.exports = router;
