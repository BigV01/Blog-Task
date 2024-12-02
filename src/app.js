require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/posts', postRoutes);
app.use('/auth', authRoutes);

// Error handler
app.use(errorHandler);

module.exports = app;