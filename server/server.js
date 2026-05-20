const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'HealthBridge API is running' });
});

// User route placeholder
app.get('/api/user', (req, res) => {
    res.json({ role: 'user' });
});

// Admin route placeholder
app.get('/api/admin', (req, res) => {
    res.json({ role: 'admin' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});