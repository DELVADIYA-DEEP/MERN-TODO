const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Import the database connection function
const connectDB = require('./config/db');

// Import the API routes
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(express.json()); // Allows the app to parse JSON body from incoming requests

// Mount the API routes
app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

// Define a simple test route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});