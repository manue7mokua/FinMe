const { PrismaClient } = require(('@prisma/client'));
const prisma = new PrismaClient();
var cors = require('cors');

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



module.exports = router;
