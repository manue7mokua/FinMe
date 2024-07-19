const { PrismaClient } = require(('@prisma/client'));
const prisma = new PrismaClient();
const express = require('express');
const router = express.Router();

// Route to add an user's expense
router.post('/:id/addExpense', async(req, res) => {
    const { expenseType, expenseName, expenseAmount, expenseDescription, dateofExpense, isRecurring, bankAccountName } = req.body;

    // Get userid from url
    const studentId = parseInt(req.params.id);
    console.log(req.body);

    try {
        // Validate date inputs
        if (!dateofExpense) {
            return res.status(400).send('Enter a valid date!');
        }

        // Parse and format dates
        const expenseDate = new Date(Date.parse(dateofExpense)).toISOString();
        console.log(expenseDate)

        // Find bank account be accountName and studentId
        const bankAccount = await prisma.account.findFirst({
            where: {
                accountName: bankAccountName,
                studentId
            }
        })
        console.log(bankAccount)

        await prisma.expense.create({
            data: {
                studentId,
                accountId: bankAccount.id,
                expenseType,
                expenseName,
                expenseAmount: parseFloat(expenseAmount),
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

// Route to update an expense
router.put('/:id/updateExpense', async (req, res) => {
    const { expenseId, expenseType, expenseName, expenseDescription, dateofExpense, isRecurring, bankAccountId } = req.body;
    const studentId = parseInt(req.params.id);
    // const expenseId = parseInt(req.params.expenseId);

    try {
        // Validate date inputs
        if (!dateofExpense) {
            return res.status(400).send('Enter a valid date!');
        }

        // Parse and format dates
        const expenseDate = new Date(Date.parse(dateofExpense)).toISOString();

        // Find bank account by accountName and studentId
        const bankAccount = await prisma.account.findFirst({
            where: {
                id: bankAccountId,
                studentId
            }
        })

        if (!bankAccount) {
            return res.status(404).send('Bank account does not exist!');
        }

        // Find the expense to update
        const expense = await prisma.expense.findUnique({
            where: {
                id: expenseId,
                studentId: studentId,
            }
        });

        if (!expense) {
            return res.status(404).send('Expense does not exist!');
        }

        // Update the student expense
        const updatedExpense = await prisma.expense.update({
            where: {
                id: expenseId
            },
            data: {
                id: expenseId,
                accountId: bankAccountId,
                expenseType,
                expenseName,
                expenseDescription,
                expenseDate,
                isRecurring,
            }
        });

        return res.json(updatedExpense);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error!');
    }
});

// Route to delete a student expense
router.delete('/:id/deleteExpense', async (req, res) => {
    const { expenseId } = req.body;
    const studentId = parseInt(req.params.id);

    try {
       // Find expense specified by expenseId
        const expense = await prisma.expense.findUnique({
            where: {
                studentId,
                id: expenseId,
            }
        })

        if (!expense) {
            return res.status(404).send('That expense does not exist!');
        };

        await prisma.expense.delete({
            where: {
                id: expenseId,
            }
        });

    } catch(err) {
        console.error(err.message);
        return res.status(500).send('Server error!');
    }

    // Success if process completed without errors
    res.status(200).send('Expense deleted successfully! :)');
})

module.exports = router;
