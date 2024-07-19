const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const modelRoutes = require('./routes/modeltraining')
const PORT = 3000;

app.use(cors())
app.use(express.json({ extended: false }));

// Model training route
app.use('/training', modelRoutes);

app.listen(PORT);
