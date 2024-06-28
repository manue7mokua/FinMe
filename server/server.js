const express = require('express')
const app = express();
var cors = require('cors');

// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
const PORT = 3000

app.use(cors())
app.use(express.json({ extended: false }));

app.get('/home', (req, res) => {
    res.send(`Hello`);
})

app.listen(PORT);
