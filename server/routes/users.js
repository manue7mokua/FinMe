const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { addToBlacklist } = require('../utils/blacklist.js');

const salt = bcrypt.genSaltSync(10);
const auth = require('../middleware/auth.js');
const { check, validationResult} = require('express-validator');
const router = express.Router();
require('dotenv').config();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Route to sign up a user for an account
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

//Route to login existing user to application
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

// Route to delete user from database
router.delete('/delete/:id', auth, async (req, res) => {
    const { email, password } = req.body;
    const userId = parseInt(req.params.id, 10);

    try {
      // Check if user email matches in db
      const user = await prisma.student.findUnique({
        where: {
            id: userId,
            email: email
        }
      });

      if (!user) {
        return res.status(404).send({ message: 'Please enter the correct email address' });
      }

      // Compare password with hashed db password
      const passwordisMatch = bcrypt.compareSync(password, user.password);

      if (!passwordisMatch) {
        return res.status(401).send({ message: 'Wrong password! Try again mate!' });
      }

      // Delete user from database
      await prisma.student.delete({
        where: {
          id: userId,
        },
      });

      res.send({ message: 'Account deleted successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

// Route to handle user logout
router.post('/logout', auth, async (req, res) => {
    const header = req.headers['Authorization'];
    const authToken = header.split(' ')[1];

    if (token == null) {
        return res.status(404).send({ message: 'Authorization token not found' })
    }

    // If found add authentication token to blacklist
    addToBlacklist(authToken);
    res.send('Logout successful')
})

router.get('/info', auth, async (req, res) => {
    res.send(req.user);
})

module.exports = router;
