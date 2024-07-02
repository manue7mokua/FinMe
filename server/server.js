const express = require('express')
const app = express();
var cors = require('cors');
const userRoutes = require('./routes/users.js')
const accountRoutes = require('./routes/bankdetails.js')

const PORT = 3000

app.use(cors())
app.use(express.json({ extended: false }));

// Use user routes
app.use('/users', userRoutes);

// Use account routes
app.use('/users', accountRoutes);

app.listen(PORT);
