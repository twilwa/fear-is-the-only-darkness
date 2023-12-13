const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb://localhost/twitterClone', { useNewUrlParser: true, useUnifiedTopology: true });

// User routes
app.use('/api/users', require('./routes/users'));

// Tweet routes
app.use('/api/tweets', require('./routes/tweets'));

// Authentication routes
app.use('/api/auth', require('./routes/auth'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
