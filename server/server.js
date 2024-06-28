const express = require('express')
const app = express();
var cors = require('cors');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const salt = bcrypt.genSaltSync(10);

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const PORT = 3000

app.use(cors())
app.use(express.json({ extended: false }));

app.get('/home', (req, res) => {
    res.send(`Hello`);
})

app.post('/users/signup', async (req, res) => {
    const { firstName, lastName, email, password} = req.body;

    // Have a check to verify user is in database
    const existingUser = await prisma.student.findUnique({
        where: {
            email
        }
    });
    if (existingUser) {
        return res.status(400).send({ message: `Username is taken. Try logging in`})
    }

    console.log(req.body);
    // If new user, hash password using bcrypt
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Add new user to the database
    const newUser = await prisma.student.create({
        data: {
            firstName,
            lastName,
            email,
            password: hashedPassword
        }
    })

    // Generate a jwt token for the new user
    const token = jwt.sign(newUser, 'awognawole3280843halegn');
    res.send({ token });  // Send token to the client
})


app.listen(PORT);
