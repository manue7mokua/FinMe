const { PrismaClient } = require(('@prisma/client'));
const prisma = new PrismaClient();
const express = require('express');
const router = express.Router();
const { calculateStatistics, predictGoatedInsights, calculateAllUserStats } = require('../statsUtils');

// Route to add an user's expense
router.post('/:id/addExpense', async(req, res) => {
    const { expenseType, expenseName, expenseAmount, expenseDescription, dateofExpense, isRecurring, bankAccountName } = req.body;

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

// Route to get the sum of expenses for each category
router.get('/:id/expensesInfo/categorySum', async (req, res) => {
    const studentId = parseInt(req.params.id);

    try {
        // Get the sum of expenses for each category
        const categorySums = await prisma.expense.groupBy({
            by: ['expenseType'],
            _sum: {
                expenseAmount: true,
            },
            where: {
                studentId,
            }
        });

        return res.json(categorySums);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error!');
    }
});

// Helper function to get the start and end date of the previous month
const getPreviousMonthDates = () => {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    return { startOfMonth, endOfMonth };
  };
  
  // Route to get all student expenses for the previous month
  router.get('/:id/expensesInfo/previousMonth', async (req, res) => {
    const studentId = parseInt(req.params.id);
    const { startOfMonth, endOfMonth } = getPreviousMonthDates();
  
    try {
      // Get all student-related expenses for the previous month
      const previousMonthExpenses = await prisma.expense.findMany({
        where: {
          studentId,
          expenseDate: {
            gte: startOfMonth,
            lte: endOfMonth
          }
        }
      });
  
      return res.json(previousMonthExpenses);
    } catch (err) {
      return res.status(500).send('Server error!');
    }
  });

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

// Fetch all user expenses for benchmark calculations
const fetchAllUserExpenses = async () => {
    try {
      const allUserExpenses = await prisma.expense.findMany();
      return allUserExpenses;
    } catch (err) {
      console.error('Error fetching all user expenses:', err);
      throw err;
    }
  };

// Route to generate insights
router.get('/:id/insights', async (req, res) => {
    const studentId = parseInt(req.params.id);
    const { selectedMonths, selectedCategories } = req.query;
  
    try {
    // Ensure selectedMonths and selectedCategories are arrays
    const monthsArray = Array.isArray(selectedMonths) ? selectedMonths : [selectedMonths];
    const categoriesArray = Array.isArray(selectedCategories) ? selectedCategories : [selectedCategories];

    // Initialize an array to hold all expense amounts
    let allStudentExpenses = [];

    // Fetch student expenses for each selected month
    for (const month of monthsArray) {
      const [year, monthIndex] = month.split('-');
      const startDate = new Date(year, monthIndex - 1, 1).toISOString();
      const endDate = new Date(year, monthIndex, 0, 23, 59, 59, 999).toISOString(); // End of the month

      const studentExpenses = await prisma.expense.findMany({
        where: {
          studentId,
          expenseDate: {
            gte: startDate,
            lte: endDate
          },
          expenseType: {
            in: categoriesArray
          }
        }
      });

      // Add expenses to the allStudentExpenses array
      allStudentExpenses = allStudentExpenses.concat(studentExpenses);
    }

    // Create an array of student expense amounts
      const studentExpenseAmounts = allStudentExpenses.map(expense => expense.expenseAmount);

    // Calculate statistics for the student
      const userStats = calculateStatistics(studentExpenseAmounts);
  
      // Fetch all user expenses for benchmark
      const allUserExpenses = await fetchAllUserExpenses();
  
      // Calculate statistics for all users
      const allUserStats = calculateAllUserStats(allUserExpenses);
  
      // Generate predictions and insights
      const { probability, insights } = predictGoatedInsights(userStats, allUserStats);
  
      return res.json({ probability, insights });
    } catch (err) {
      console.error('Error generating insights:', err);
      return res.status(500).send('Server error!');
    }
  })

// Helper function to get the start and end date of the week
const getWeekDates = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    return { startOfWeek, endOfWeek };
};

// Route to get expenses week by week
router.get('/:id/expensesInfo/weekly', async (req, res) => {
    const studentId = parseInt(req.params.id);
    const now = new Date();
    const { startOfWeek, endOfWeek } = getWeekDates(now);
    const previousWeek = new Date(startOfWeek);
    previousWeek.setDate(previousWeek.getDate() - 7);
    const { startOfWeek: startOfPreviousWeek, endOfWeek: endOfPreviousWeek } = getWeekDates(previousWeek);

    try {
        // Get expenses for this week
        const expensesThisWeek = await prisma.expense.findMany({
        where: {
            studentId,
            expenseDate: {
            gte: startOfWeek,
            lte: endOfWeek,
            },
        },
        });

        // Get expenses for last week
        const expensesLastWeek = await prisma.expense.findMany({
        where: {
            studentId,
            expenseDate: {
            gte: startOfPreviousWeek,
            lte: endOfPreviousWeek,
            },
        },
        });

        return res.json({ thisWeek: expensesThisWeek, lastWeek: expensesLastWeek });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error!');
    }
});

module.exports = router;
