const express = require('express');
const app = express();
require('dotenv').config();
require('./models/db.config');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
const ProductRouter = require('./routes/ProductRouter');
const serverless = require('serverless-http'); // Import the serverless-http package

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());  // Allow all origins

// Routes
app.get('/', (req, res) => {
    res.send('Backend works successfully');
});

app.get('/ping', (req, res) => {
    res.send('pong');
});

// Auth and Product Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// Vercel-specific export
module.exports.handler = serverless(app); // Wrap the Express app in the serverless handler

// The `app.listen(PORT)` is not needed for Vercel
