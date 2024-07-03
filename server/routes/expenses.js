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

// Route to get all student expenses
router.get('/:id/expensesInfo/student', async (req, res) => {
    const studentId = parseInt(req.params.id);

    try {
        // Get all student related expenses
        const studentExpenses = await prisma.expense.findMany({
            where: {
                studentId
            }
        });

        return res.json(studentExpenses);
    } catch (err) {
        return res.status(500).send('Server error!')
    }

})

// Route to get all bank account related expenses
router.get('/:id/expensesInfo/account', async (req, res) => {
    const studentId = parseInt(req.params.id);

    // Get a bank account from user
    const { accountName } = req.body;

    try {
        // Get the unique bank account id
        const bankAccount = await prisma.account.findFirst({
            where: {
                accountName,
                studentId
            }
        })

        // Get all account related expenses
        const bankAccountExpenses = await prisma.expense.findMany({
            where: {
                accountId: bankAccount.id
            }
        })

        // Return json object of account expenses
        return res.json(bankAccountExpenses);
    } catch (err) {
        return res.status(500).send('Server error mate!');
    }
})

module.exports = router;
