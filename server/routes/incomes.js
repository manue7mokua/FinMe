const { PrismaClient } = require(('@prisma/client'));
const prisma = new PrismaClient();
const cors = require('cors');

const express = require('express');
const router = express.Router();

// Route to add an income type to database
router.post('/:id/addIncome', async(req, res) => {
    const { incomeName, incomeType, incomeAmount, startDate, endDate } = req.body;
    // Get userid from url
    const studentId = parseInt(req.params.id);

    try {
        // Valid Date Inputs
        if (!startDate && !endDate) {
            return res.send('Enter a valid date!')
        }
        // Get date when income stream starts
        const incomeStartDate = new Date(Date.parse(startDate)).toISOString();

        // Get date when income stream stops
        const incomeEndDate = new Date(Date.parse(endDate)).toISOString();

        await prisma.income.create({
            data: {
                studentId,
                incomeName,
                incomeType,
                incomeAmount,
                incomeStartDate,
                incomeEndDate
            }
        })
    } catch (err) {
        console.log(err.message);
        return res.status(500).send('Server error!');
    }

    // Return json of newly added income data
    return res.status(200).send('Great! New income stream added!');
})

// Route to get all student income sources
router.get('/:id/incomeInfo', async (req, res) => {
    const studentId = parseInt(req.params.id);

    try {
        // Get all user sources
        const incomeSources = await prisma.income.findMany({
            where: {
                studentId
            }
        });

        return res.json(incomeSources);
    } catch (err) {
        return res.status(500).send('Server error!')
    }

})

// Route to update an income source
router.put('/:id/updateIncome/:incomeId', async (req, res) => {
    const { incomeName, incomeType, incomeAmount, startDate, endDate } = req.body;
    const studentId = parseInt(req.params.id);
    const incomeId = parseInt(req.params.incomeId);

    try {
        // Validate date inputs
        if (!startDate || !endDate) {
            return res.status(400).send('Enter a valid date!');
        }

        // Parse and format dates
        const incomeStartDate = new Date(Date.parse(startDate)).toISOString();
        const incomeEndDate = new Date(Date.parse(endDate)).toISOString();

        // Find the income source to update
        const income = await prisma.income.findUnique({
            where: {
                id: incomeId,
                studentId: studentId
            }
        });

        if (!income) {
            return res.status(404).send('Income source not found!');
        }

        // Update the income source
        const updatedIncome = await prisma.income.update({
            where: {
                id: incomeId
            },
            data: {
                incomeName,
                incomeType,
                incomeAmount,
                incomeStartDate,
                incomeEndDate
            }
        });

        // Return the updated income source
        return res.json(updatedIncome);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error!');
    }
});

// Route to delete a student income source
router.delete('/:id/deleteIncome/:incomeId', async (req, res) => {
    const { incomeName } = req.body;
    const studentId = parseInt(req.params.id);
    const incomeId = parseInt(req.params.incomeId);

    try {
       // Find account specified by accountName
        const income = await prisma.income.findUnique({
            where: {
                studentId,
                id: incomeId,
                incomeName
            }
        })

        if (!income) {
            return res.status(404).send('That income source does not exist!');
        };

        await prisma.income.delete({
            where: {
                id: incomeId,
                incomeName
            }
        });

    } catch(err) {
        console.error(err.message);
        return res.status(500).send('Server error!');
    }

    // Success if process completed without errors
    res.status(200).send('Income source deleted successfully! :)');
})

module.exports = router;
