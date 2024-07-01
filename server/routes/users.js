const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const auth = require('../middleware/auth.js');
const { check, validationResult} = require('express-validator');
const router = express.Router();
require('dotenv').config();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/signup',
    check("email", "This is not a valid email").isEmail(),
    check("password", "Password must be 6 characters or more").isLength({ min: 6 }),
    async (req, res) => {

    const myValidationResult = validationResult(req).array();
    if (myValidationResult.length > 0) {
        return res.status(400).send({ errors: myValidationResult })
    }
    const { firstName, lastName, email, password} = req.body;

    // Verify if user email already exists in database
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
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET_AUTH_TOKEN, { expiresIn: '1h' });
    res.send({ token });  // Send token to the client
})

router.post('/login',
    check("email", "This is not a valid email").isEmail(),
    check("password", "Password is required").exists(),
    async (req, res) => {
        const myValidationResult = validationResult(req).array();
        if (myValidationResult.length > 0) {
            return res.status(400).json({ errors: myValidationResult });
        }

        const { email, password } = req.body;

        try {
            // Check if user actually exists
            const user = await prisma.student.findUnique({
                where: {
                    email
                }
            });

            if (!user) {
                return res.status(400).send({ message: "Invalid Credentials" });
            }

            // Compare password
            const passwordisMatch = bcrypt.compareSync(password, user.password);

            if (!passwordisMatch) {
                return res.status(400).send({ message: "Wrong password! Try again!" });
            }

            // If user is matched, send JWT token
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_AUTH_TOKEN, { expiresIn: '1h' });
            res.send({ token });

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

router.get('/info', auth, async (req, res) => {
    res.send(req.user);
})

module.exports = router;
