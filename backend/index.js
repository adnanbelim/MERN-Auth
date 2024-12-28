<<<<<<< HEAD
const express = require('express');
const app = express();
require('dotenv').config();
require('./models/db.config');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
const ProductRouter = require('./routes/ProductRouter');
const serverless = require('serverless-http');  // Import serverless-http

const PORT = process.env.PORT || 8000;

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

// Vercel serverless export
module.exports.handler = serverless(app);  // Export the handler

// Local server start (for development)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    });
}
=======
const express = require('express');
const app = express();
require('dotenv').config();
require('./models/db.config');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
const ProductRouter = require('./routes/ProductRouter');
const serverless = require('serverless-http');  // Import serverless-http

const PORT = process.env.PORT || 8000;

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

// Vercel serverless export
module.exports.handler = serverless(app);  // Export the handler

// Local server start (for development)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    });
}
>>>>>>> 4ff2ba754b573544ffbecc53f57d3d7034704018
